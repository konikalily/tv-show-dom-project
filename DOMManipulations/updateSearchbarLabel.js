//updating search bar

export default function updateSearchBarLabel(filteredEpisodes,allEpisodes) {
  const episodeSearchLabel = document.getElementById("episode-search-label");
  episodeSearchLabel.innerText = `Displaying ${filteredEpisodes.length}/${allEpisodes.length} episodes`;
  //rootElem.textContent = `Got ${allEpisodes.length} episode(s)`;
  console.log(filteredEpisodes);
}
