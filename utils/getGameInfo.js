import apiRequest from "./apiRequest";
import getAccessToken from "./getAccessToken";

export default async function getGameInfo(slug) {
  const token = await getAccessToken();
  if (token) {
    try {
      const body = `fields name,summary,rating,rating_count,cover.url,screenshots.url,genres.name,slug,platforms.name,websites.url,websites.category,release_dates.human,involved_companies.company.name,involved_companies.developer; where slug = "${slug}";`;
      const data = await apiRequest(token, "games", body);
      if (data.length > 0) {
        const urlCorrectedData = data.map((game) => {
          const correctedData = { ...game };
          correctedData.cover.url = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.url.slice(
            -10
          )}`;

          const screenshots = game.screenshots.map((screenshot) => {
            const correctedScreenshot = { ...screenshot };
            const filename = screenshot.url.split("/").slice(-1);
            correctedScreenshot.url =
              "https://images.igdb.com/igdb/image/upload/t_screenshot_med/" +
              filename;
            return correctedScreenshot;
          });
          correctedData.screenshots = screenshots;
          return correctedData;
        });
        return urlCorrectedData[0];
      } else {
        console.error(`Slug ${slug} not found`);
      }
    } catch (err) {
      console.error(`Error in request to API: ${err}`);
    }
  } else {
    console.error("Couldn't get game info: No token");
  }
}
