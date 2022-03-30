import getAccessToken from "../../utils/getAccessToken";

export default async function handler(req, res) {
  const data = await getAccessToken();
  res.status(200).json(data);
}
