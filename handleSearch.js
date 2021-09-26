import createEpisodeCode from "./createEpisodeCode.js";
import allEpisodes from "./script.js";
import filterEpisodes from "./filterEpisodes.js";
import updateSearchBarLabel from "./updateSearchbarLabel.js";
import displayFilteredEpisodes from "./displayFilteredEpisodes.js";
import displayFilteredOptions from "./displayFilteredOptions.js";

export default function handleSearch(event) {
  const filteredEpisodes = filterEpisodes(event, allEpisodes);
  updateSearchBarLabel(filteredEpisodes); //updating search bar
  displayFilteredEpisodes(allEpisodes, filteredEpisodes); //displaying our filtered episodes
  displayFilteredOptions(allEpisodes, filteredEpisodes);
}
