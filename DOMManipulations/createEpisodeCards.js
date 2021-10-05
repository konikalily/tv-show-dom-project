import createEpisodeCode from "./createEpisodeCode.js";
import createImg from "../createImg.js";

// This function creating the ul anf li items to hold all the episodes information

export default function createEpisodeCards(allEpisodes) {
  const rootElem = document.getElementById("root");
  const myEpisodeUl = document.createElement("ul");
  rootElem.innerHTML = "";
  //myEpisodeUl.style.overflow = "scroll"; // this is not right!!

  allEpisodes.forEach((episode) => {
    const episodeCard = document.createElement("li");
    episodeCard.id = `episode-${episode.id}`; //applied the episode list item's id to the dom
    episodeCard.className = "episode-card"; //holder card for the episode

    //title for the episodes
    const header = document.createElement("h2");
    const episodeCode = createEpisodeCode(episode); //bringing episode title's format from createEpisodeCode file
    header.innerText = `${episode.name} - ${episodeCode}`; //episode titles
    episodeCard.appendChild(header);
    //image for the episode
    const image = createImg(episode); //bringing image from createImg.js
    episodeCard.appendChild(image); //adding img to the li
    //summary of the episodes
    const summaryParaDiv = document.createElement("div");
    summaryParaDiv.innerHTML = episode.summary;
    //adding everything to the dom
    myEpisodeUl.appendChild(episodeCard); //adding li to the ul
    episodeCard.appendChild(summaryParaDiv); //adding summary to the li
  });
  rootElem.appendChild(myEpisodeUl); //adding ul to the root div
}
