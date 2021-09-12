//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  console.log(allEpisodes)
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const myEpisodeUl = document.createElement("ul");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((episode) => {
    const myLi = document.createElement("li");
    const header = document.createElement("h2");

    const episodeNum = episode.number + "";
    const formatEpisodeNum = episodeNum.padStart(2, "0");

    const seasonNum = episode.season + "";
    const formatSeasonNum = seasonNum.padStart(2, "0");

    const episodeNumFormat = `S${formatSeasonNum}E${formatEpisodeNum}`; //S02E07

    header.innerText = `${episode.name} -${episodeNumFormat}`;

    myLi.appendChild(header);

    const image = document.createElement("img");
    image.src = episode.image.medium;
    image.alt = episode.name;
    myLi.appendChild(image);

    const summaryParaDiv = document.createElement("div");
    summaryParaDiv.innerHTML = episode.summary;
    myLi.appendChild(summaryParaDiv);
    // 5+'5'
    myEpisodeUl.appendChild(myLi);
  });
  rootElem.appendChild(myEpisodeUl);
}

window.onload = setup;
