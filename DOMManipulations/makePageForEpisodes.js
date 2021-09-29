import createEpisodeCards from "./createEpisodeCards.js";
import createEpisodeOptions from "./createEpisodeOptions.js";

export default function makePageForEpisodes(allEpisodes) {
    
  const episodeSearchLabel = document.getElementById("episode-search-label");
  episodeSearchLabel.innerText = `Displaying ${allEpisodes.length}/73 Episodes`;

  createEpisodeOptions(allEpisodes);
  createEpisodeCards(allEpisodes);
}
