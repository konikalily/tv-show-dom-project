//level 400
import fetchAPIData from "../fetchAPIData.js";
import makePageForEpisodes from "../DOMManipulations/makePageForEpisodes.js";
import handleSearch from "./handleSearch.js";

export default function handleShowSelect() {
  const showId = this.value; //from getAllShow ids
  fetchAPIData(showId)
    .then((jsonToString) => localStorage.setItem("allEpisodes", jsonToString))
    .then(() => {
      const allEpisodesAsString = localStorage.getItem("allEpisodes");
      const allEpisodesArray = JSON.parse(allEpisodesAsString); //to convert string to js object

      makePageForEpisodes(allEpisodesArray);

      const episodeSearchInput = document.getElementById(
        "episode-search-input"
      );
      episodeSearchInput.addEventListener("input", (event) =>
        handleSearch(event, allEpisodesArray)
      );
    });
}
