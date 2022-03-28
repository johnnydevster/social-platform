import apiRequest from "../../utils/apiRequest";
import getAccessToken from "../../utils/getAccessToken";

async function handler(req, res) {
  const slug = req.query.slug;
  if (slug) {
    const token = await getAccessToken();
    if (token) {
      try {
        const body = `fields name,summary,rating,rating_count,cover.url,screenshots.url,genres.name,slug,platforms.*; where slug = "${slug}";`;
        const data = await apiRequest(token, "games", body);
        if (data.length > 0) {
          const urlCorrectedData = data.map((game) => {
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
          res.status(200).json(urlCorrectedData[0]);
        } else {
          res.status(404).json({ message: `Slug ${slug} not found` });
        }
      } catch (err) {
        res.status(500).json({ message: "Error in request to API" });
      }
    } else {
      res.status(500).json({ message: "Couldn't get token" });
    }
  } else {
    res.status(400).json({ message: "Missing slug parameter" });
  }
}

export default handler;
