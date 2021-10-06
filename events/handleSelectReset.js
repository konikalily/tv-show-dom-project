import updateSearchBarLabel from "../DOMManipulations/updateSearchbarLabel.js";
export default function handleSelectReset() {
  const episodeSelectInput = document.getElementById("episode-select-input");
  episodeSelectInput.selectedIndex = 0;
  const episodeSearchInput = document.getElementById("episode-search-input");
  episodeSearchInput.value = "";
  const episodeCards = document.querySelectorAll(".episode-card");
  episodeCards[0].scrollIntoView({ behavior: "smooth" });
  const episodeCardsArray = Array.from(episodeCards);
  episodeCardsArray.forEach((episodeCard) => {
    episodeCard.style.display = "block";
  });
  updateSearchBarLabel(episodeCardsArray, episodeCardsArray); //updating search bar
}
