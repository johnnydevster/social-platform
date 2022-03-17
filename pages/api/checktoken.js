import { secondsUntilTokenExpires } from "../../firebase";

export default async function handler(req, res) {
  console.log(await secondsUntilTokenExpires());
  res.status(200).json({ message: "hello" });
}
