export default function displayFilteredEpisodes(allEpisodes, filteredEpisodes) {
  allEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`episode-${episode.id}`);
    episodeElement.style.display = "none";
  });

  filteredEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`episode-${episode.id}`);
    episodeElement.style.display = "block";
  });
}
