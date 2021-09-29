//this function filter
export default function displayFilteredEpisodes(allEpisodes, filteredEpisodes) {
  allEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`episode-${episode.id}`);
    episodeElement.style.display = "none";
  });
  // there is some issue with Id
  filteredEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`episode-${episode.id}`);
    episodeElement.style.display = "block";
  });
}
