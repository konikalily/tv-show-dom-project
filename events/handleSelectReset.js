export default function handleSelectReset() {
  const episodeSelectInput = document.getElementById("episode-select-input");
  episodeSelectInput.selectedIndex = 0;
  const episodeCards = document.querySelectorAll(".episode-card");
  episodeCards[0].scrollIntoView({ behavior: "smooth" });
  const episodeCardsArray = Array.from(episodeCards);
  episodeCardsArray.forEach((episodeCard) => {
    episodeCard.style.visibility = "visible";
  });
}
