import getGameInfo from "../../utils/getGameInfo";

export default async function handler(req, res) {
  const gameInfo = await getGameInfo("the-last-of-us-part-ii");
  res.status(200).json(gameInfo);
}
