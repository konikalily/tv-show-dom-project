import getAllEpisodes from "./episodes.js";
import handleSearch from "./handleSearch.js";
import createEpisodeCode from "./createEpisodeCode.js";

import createEpisodeOptions from "./createEpisodeOptions.js";
import createEpisodeCards from "./createEpisodeCards.js";
import handleSelect from "./handleSelect.js";

//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
function setup() {
  // const allEpisodes = getAllEpisodes();
  // console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(allEpisodes) {
  const searchBarLabel = document.getElementById("searchLabel");
  searchBarLabel.innerText = `Displaying ${allEpisodes.length}/73 Episodes`;

  //rootElem.textContent = `Got ${allEpisodes.length} episode(s)`;
  createEpisodeOptions(allEpisodes);
  createEpisodeCards(allEpisodes);
}

window.onload = setup;

const searchBar = document.getElementById("search");
searchBar.addEventListener("input", handleSearch);

const selectInput = document.getElementById("episodeMenu");
selectInput.addEventListener("change", handleSelect);

export default allEpisodes;
