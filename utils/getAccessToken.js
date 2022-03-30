import { getToken, uploadToken } from "../firebase";
import { Timestamp } from "firebase/firestore";
import fs from "fs";
import path from "path";

const TOKEN_CACHE_PATH = path.resolve(".token");

async function getNewTokenFromTwitch() {
  try {
    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
      { method: "POST" }
    );
    if (!response.ok) throw response;
    const data = await response.json();
    const token = await uploadToken(data);
    if (token) {
      console.log("Token uploaded successfully");
      return token;
    }
    throw new Error("Token upload to firestore failed");
  } catch (err) {
    console.log(
      `Error getting token from Twitch API: ${err.status}: ${err.statusText}`
    );
  }
}

async function writeTokenToCache(token) {
  fs.writeFileSync(path.join(TOKEN_CACHE_PATH), JSON.stringify(token), "utf8");
}

export default async function getAccessToken() {
  let cachedToken;
  const currentTime = Timestamp.now().seconds;

  // first check if token exists in cache and hasn't expired
  try {
    cachedToken = JSON.parse(fs.readFileSync(TOKEN_CACHE_PATH), "utf8");

    if (cachedToken.expirationTime - currentTime < 1) {
      // cached token has expired, get a new one and upload it to firestore
      cachedToken = await getNewTokenFromTwitch();
    }
  } catch (err) {
    console.log("Cache not initialized, getting token from firestore...");
  }

  // token doesn't exist in cache, get it from firestore and check that it hasn't expired
  if (!cachedToken) {
    const token = await getToken();

    if (token.expirationTime - currentTime < 1) {
      // firestore token has expired, get a new one and upload it to firestore
      cachedToken = await getNewTokenFromTwitch();
    }

    try {
      writeTokenToCache(token);
    } catch (err) {
      console.log(`Error writing token to cache: ${err}`);
      console.log("Returning token directly instead...");
      return token.token;
    }
    cachedToken = token;
  }
  console.log(`Got token from cache: ${cachedToken.token}`);
  return cachedToken.token;
}
