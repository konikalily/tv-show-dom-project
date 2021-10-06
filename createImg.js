//this file creating image for the episode card
export default function createImg(episode) {
  if (!episode.image) {
    const text = document.createElement("p");
    text.className = "episodeImage";
    text.innerText = `No image found for this episode!!`;
    return text;
  }
  const image = document.createElement("img");
  image.className = "episodeImage";
  image.src = episode.image.medium; //i need to find a placeholder image.
  image.alt = episode.name;
  return image;
}
