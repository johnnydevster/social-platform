export default async function getAccessToken() {
  const request = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );
  const data = await request.json();
  return { token: data.access_token, expiresIn: data.expires_in };
}
