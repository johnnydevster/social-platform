import {
  getToken,
  uploadToken,
} from "../lib/firebase-server/firebase-server-firestore";
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

    if (token?.expirationTime - currentTime < 1 || !token) {
      console.log(
        "Couldn't find token in firestore, getting it from Twitch instead..."
      );
      // firestore token has expired or doesn't exist, get a new one and upload it to firestore
      const newToken = await getNewTokenFromTwitch();

      try {
        fs.writeFileSync(
          path.join(TOKEN_CACHE_PATH),
          JSON.stringify(newToken),
          "utf8"
        );
      } catch (err) {
        console.log(`Error writing token to cache: ${err}`);
        console.log("Returning token directly instead...");
        return newToken.token;
      }
    }
    return token.token;
  }
  return cachedToken.token;
}
