import apiRequest from "../../utils/apiRequest";
import getAccessToken from "../../utils/getAccessToken";

export default async function handler(req, res) {
  const token = await getAccessToken();
  if (token) {
    try {
      const gameBody =
        "fields name,summary,rating,rating_count,cover.url,screenshots.url; where category = 0 & rating > 75; sort rating_count desc; limit 100;";
      const gameData = await apiRequest(token, "games", gameBody);

      const urlCorrectedData = gameData.map((game) => {
        const correctedData = { ...game };
        correctedData.cover.url = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.url.slice(
          -10
        )}`;
        const screenshots = game.screenshots.map((screenshot) => {
          const correctedScreenshot = { ...screenshot };
          correctedScreenshot.url =
            "https://images.igdb.com/igdb/image/upload/t_screenshot_med/" +
            screenshot.url.slice(-24);
          return correctedScreenshot;
        });
        correctedData.screenshots = screenshots;
        return correctedData;
      });

      res.status(200).json(urlCorrectedData);
    } catch (err) {
      res.status(500).json({ message: "Error in request to API" });
    }
  } else {
    res.status(500).json({ message: "Couldn't get token" });
  }
}
