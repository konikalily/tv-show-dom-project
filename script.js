import getAllShows from "./shows.js";
import createShowOptions from "./DOMManipulations/createShowOptions.js";
import handleEpisodeSelect from "./events/handleEpisodeSelect.js";
import handleSelectReset from "./events/handleSelectReset.js";
import handleShowSelect from "./events/handleShowSelect.js";

//You can edit ALL of the code here
function setup() {
  const episodeSelectInput = document.getElementById("episode-select-input");
  episodeSelectInput.addEventListener("change", handleEpisodeSelect); //to provide a way for the user to see all episodes again.

  const selectReset = document.getElementById("selectReset");
  selectReset.addEventListener("click", handleSelectReset); //reset select option

  const showSelectInput = document.getElementById("show-select-input");
  showSelectInput.addEventListener("change", handleShowSelect);
  const allShows = getAllShows();
  createShowOptions(allShows); 
}// To present all shows

window.onload = setup;
