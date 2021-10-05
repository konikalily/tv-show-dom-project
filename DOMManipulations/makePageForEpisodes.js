//this function is making pages for episodes
import createEpisodeCards from "./createEpisodeCards.js";
import createEpisodeOptions from "./createEpisodeOptions.js";
import filterEpisodes from "./filterEpisodes.js";

export default function makePageForEpisodes(allEpisodes) {
  const episodeSearchLabel = document.getElementById("episode-search-label"); //grabbing input from users
  episodeSearchLabel.innerText = `Displaying ${filterEpisodes.length} /of ${allEpisodes.length} Episodes`;

  createEpisodeOptions(allEpisodes);
  createEpisodeCards(allEpisodes);//for single episodes
}
