function createImg(episode) {
    const image = document.createElement("img");
    image.className = "episodeImage";
    image.src = episode.image.medium;
    image.alt = episode.name;
    return image
}