import { db, addUser } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  addUser();
  res.status(200).json({ message: "hello" });
}
