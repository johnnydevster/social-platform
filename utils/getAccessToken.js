import { getToken, secondsUntilTokenExpires, uploadToken } from "../firebase";
import fs from "fs";
import path from "path";

const TOKEN_CACHE_PATH = path.resolve(".token");

export default async function getAccessToken() {
  let cachedToken;

  try {
    cachedToken = fs.readFileSync(TOKEN_CACHE_PATH, "utf8");
  } catch (err) {
    console.log("Cache not initialized, getting token from firestore...");
  }

  // if token DOESN'T exist in cache
  // check if firestore token has expired, if it hasn't - return it (do this in one call instead of 2)
  // if firestore token has expired, getNewTokenAndUploadToFirestore()
  // save token to cache

  if (!cachedToken) {
    const token = await getToken();

    try {
      fs.writeFileSync(path.join(TOKEN_CACHE_PATH), token, "utf8");
    } catch (err) {
      console.log(`Error writing token to cache: ${err}`);
      console.log("Returning token directly instead...");
      return token;
    }
    cachedToken = token;
  }
  console.log(`Got token: ${cachedToken}`);
  return cachedToken;

  try {
    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
      { method: "POST" }
    );
    if (!response.ok) throw response;
    const data = await response.json();
    await uploadToken({ ...data });
    console.log("Token uploaded successfully");
    return data.access_token;
  } catch (err) {
    console.log(
      `Error getting token from Twitch API: ${err.status}: ${err.statusText}`
    );
  }
}

/*
export default async function getAccessToken() {
  if ((await secondsUntilTokenExpires()) > 1) {
    // Old token hasn't expired yet, get it from firestore and return it

    console.log("Old token hasn't expired yet, getting it from firestore...");
    return getToken();
  } else {
    // Old token has expired, get a new one and upload it to firestore

    try {
      const response = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
        { method: "POST" }
      );
      if (!response.ok) throw response;
      const data = await response.json();
      await uploadToken({ ...data });
      console.log("Token uploaded successfully");
      return data.access_token;
    } catch (err) {
      console.log(
        `Error getting token from Twitch API: ${err.status}: ${err.statusText}`
      );
    }
  }
}
*/
