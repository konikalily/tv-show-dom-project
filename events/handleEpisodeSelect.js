//This function is taking the the user directly to the episode on the allEpisode list

export default function handleEpisodeSelect() {
  const selectedEpisodeId = this.value;

  const selectedEpisodeCard = document.getElementById(selectedEpisodeId);
  //console.log(selectedEpisodeCard);
  selectedEpisodeCard.scrollIntoView({ behavior: "smooth" });
  const episodeCards = document.querySelectorAll(".episode-card"); //from createEpisodeCard.js file
  const episodeCardsArray = Array.from(episodeCards);
  //console.log(episodeCardsArray);
  episodeCardsArray.forEach((episodeCard) => {
    console.log(episodeCard.id);
    //to  hide not selected episode in the page
    if (episodeCard.id !== selectedEpisodeId) {
      episodeCard.style.visibility = "hidden";
    } else {
      episodeCard.style.visibility = "visible";
    }
  });
}
