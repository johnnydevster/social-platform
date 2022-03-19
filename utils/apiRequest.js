export default async function apiRequest(token, endpoint, body) {
  const baseUrl = "https://api.igdb.com/v4/";
  const clientId = process.env.TWITCH_CLIENT_ID;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Failed to fetch from endpoint ${endpoint}.
${err.status}: ${err.statusText}`);
  }
}
