import updateSearchBarLabel from "../DOMManipulations/updateSearchbarLabel.js";
import displayFilteredEpisodes from "../DOMManipulations/displayFilteredEpisodes.js";

//This function is taking the the user directly to the episode on the allEpisode list

export default function handleEpisodeSelect() {
  const selectedEpisodeId = this.value;

  const selectedEpisodeCard = document.getElementById(selectedEpisodeId);
  //console.log(selectedEpisodeCard);
  //selectedEpisodeCard.scrollIntoView({ behavior: "smooth" });
  const filteredEpisodes = [selectedEpisodeCard];
  const episodeCards = document.querySelectorAll(".episode-card"); //from createEpisodeCard.js file
  const allEpisodes = Array.from(episodeCards);
  updateSearchBarLabel(filteredEpisodes, allEpisodes); //updating search bar

  //displayFilteredEpisodes(allEpisodes, filteredEpisodes);

  allEpisodes.forEach((episodeCard) => {
    console.log(episodeCard.id);
    //to  hide not selected episode in the page
    if (episodeCard.id !== selectedEpisodeId) {
      episodeCard.style.display = "none";
    } else {
      episodeCard.style.display = "block";
    }
  });
}
