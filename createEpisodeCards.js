import createEpisodeCode from "./createEpisodeCode.js";
import createImg from "./createImg.js";

// This function does this.......

export default function createEpisodeCards(allEpisodes) {
    const rootElem = document.getElementById("root");
    const myEpisodeUl = document.createElement("ul");
    myEpisodeUl.style.overflow = "scroll" // this is not right!!
    allEpisodes.forEach((episode) => {
        const myLi = document.createElement("li");
        myLi.id = `episode-${episode.id}`; //applied the episode id to the dom
        const header = document.createElement("h2");

        const episodeCode = createEpisodeCode(episode);

        header.innerText = `${episode.name} - ${episodeCode}`;

        myLi.appendChild(header);

        const image = createImg(episode);
        myLi.appendChild(image);

        const summaryParaDiv = document.createElement("div");
        summaryParaDiv.innerHTML = episode.summary;
        myLi.appendChild(summaryParaDiv);
        // 5+'5'
        myEpisodeUl.appendChild(myLi);
    });
    rootElem.appendChild(myEpisodeUl);
}