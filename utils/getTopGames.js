import apiRequest from "./apiRequest";
import getAccessToken from "./getAccessToken";

export default async function getTopGames() {
  const token = await getAccessToken();
  if (token) {
    try {
      const gameBody =
        "fields name,summary,rating,rating_count,cover.url,screenshots.url,genres.name,slug; where category = 0 & rating > 75 & rating_count > 500; sort rating desc; limit 10;";
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
      return urlCorrectedData;
    } catch (err) {
      console.error(`Error in request to API: ${err}`);
    }
  } else {
    console.error("Couldn't get token");
  }
}
