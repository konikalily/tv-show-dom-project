
export default function updateSearchBarLabel(filteredEpisodes) {
  const episodeSearchLabel = document.getElementById("episode-search-label");
  episodeSearchLabel.innerText = `Displaying ${filteredEpisodes.length}/73 Episodes`; 
  //rootElem.textContent = `Got ${allEpisodes.length} episode(s)`;
}
