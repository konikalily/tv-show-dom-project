export default function handleSelect(event) {
  const selectedEpisodeId = this.value;
  const selectedEpisodeCard = document.getElementById(selectedEpisodeId);
  console.log(selectedEpisodeCard);
  selectedEpisodeCard.scrollIntoView({ behavior: "smooth" });
}
