import getGameInfo from "../../utils/getGameInfo";

export default async function handler(req, res) {
  const gameInfo = await getGameInfo("god-of-war--1");
  res.status(200).json(gameInfo);
}
