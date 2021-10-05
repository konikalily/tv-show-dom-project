import filterEpisodes from "../DOMManipulations/filterEpisodes.js";
import updateSearchBarLabel from "../DOMManipulations/updateSearchbarLabel.js";
import displayFilteredEpisodes from "../DOMManipulations/displayFilteredEpisodes.js";
import displayFilteredOptions from "../DOMManipulations/displayFilteredOptions.js";

//this function is taking user input to search specific episodes

export default function handleSearch(event, allEpisodes) {
  const filteredEpisodes = filterEpisodes(event, allEpisodes);

  updateSearchBarLabel(filteredEpisodes); //updating search bar

  displayFilteredEpisodes(allEpisodes, filteredEpisodes); //displaying our filtered episodes in page

  displayFilteredOptions(allEpisodes, filteredEpisodes);
} //displaying our filtered  options in the select menu
