import { getToken, secondsUntilTokenExpires, uploadToken } from "../firebase";

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
