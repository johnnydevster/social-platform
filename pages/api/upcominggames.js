import apiRequest from "../../utils/apiRequest";
import getAccessToken from "../../utils/getAccessToken";

export default async function handler(req, res) {
  const token = await getAccessToken();
  if (token) {
    const body = "fields name; limit 100;";
    const data = await apiRequest(token, "games", body);
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "internal server error" });
  }
}
