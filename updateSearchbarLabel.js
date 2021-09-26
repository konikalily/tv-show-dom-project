export default function updateSearchBarLabel(filteredEpisodes) {
  const searchBarLabel = document.getElementById("searchLabel");
  searchBarLabel.innerText = `Displaying ${filteredEpisodes.length}/73 Episodes`;
}
