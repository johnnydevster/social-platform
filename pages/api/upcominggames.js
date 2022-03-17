import getAccessToken from "../../utils/getAccessToken";
import { uploadToken, secondsUntilTokenExpires } from "../../firebase";

export default async function handler(req, res) {
  const token = await getAccessToken();

  res.status(200).json({ message: "hello" });
}
