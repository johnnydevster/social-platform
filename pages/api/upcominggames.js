import apiRequest from "../../utils/apiRequest";
import getAccessToken from "../../utils/getAccessToken";

export default async function handler(req, res) {
  const token = await getAccessToken();
  if (token) {
    try {
      const gameBody =
        "fields name,summary,rating,rating_count; where category = 0 & rating > 75; sort rating_count desc; limit 10;";
      const gameData = await apiRequest(token, "games", gameBody);
      const gameIds = gameData.map((game) => game.id).toString();

      const coverBody = `fields *; where game = (${gameIds});`;
      const coverData = await apiRequest(token, "covers", coverBody);

      const mergedData = gameData.map((game) => {
        const cover = coverData.find((cover) => cover.game === game.id).url;
        return { ...game, coverUrl: cover };
      });
      res.status(200).json(mergedData);
    } catch (err) {
      res.status(500).json({ message: "Error in request to API" });
    }
  } else {
    res.status(500).json({ message: "Couldn't get token" });
  }
}
