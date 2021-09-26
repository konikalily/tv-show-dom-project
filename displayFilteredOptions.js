export default function displayFilteredOptions(allEpisodes, filteredEpisodes) {
  allEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`option-${episode.id}`);
    episodeElement.style.display = "none";
  });

  filteredEpisodes.forEach((episode) => {
    const episodeElement = document.getElementById(`option-${episode.id}`);
    episodeElement.style.display = "block";
  });
}
