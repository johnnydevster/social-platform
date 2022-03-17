import getAccessToken from "../../utils/getAccessToken";

export default async function handler(req, res) {
  const { token, expiresIn } = await getAccessToken();
  console.log(token);
  res.status(200).json({ message: "hello" });
}
