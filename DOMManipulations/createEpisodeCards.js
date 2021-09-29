import createEpisodeCode from "./createEpisodeCode.js";
import createImg from "../createImg.js";

// This function creating the ul anf list items to hold all the episodes

export default function createEpisodeCards(allEpisodes) {
  const rootElem = document.getElementById("root");
  const myEpisodeUl = document.createElement("ul");
  rootElem.innerHTML = "";
  //myEpisodeUl.style.overflow = "scroll"; // this is not right!!

  allEpisodes.forEach((episode) => {
    const episodeCard = document.createElement("li");
    episodeCard.id = `episode-${episode.id}`; //applied the episode id to the dom
    episodeCard.className = "episode-card";
    const header = document.createElement("h2");

    const episodeCode = createEpisodeCode(episode);

    header.innerText = `${episode.name} - ${episodeCode}`; //episode titles

    episodeCard.appendChild(header);

    const image = createImg(episode);
    episodeCard.appendChild(image);

    const summaryParaDiv = document.createElement("div");
    summaryParaDiv.innerHTML = episode.summary;
    episodeCard.appendChild(summaryParaDiv);
    // 5+'5'
    myEpisodeUl.appendChild(episodeCard);
  });
  rootElem.appendChild(myEpisodeUl);
}
