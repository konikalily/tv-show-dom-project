//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
function setup() {
  // const allEpisodes = getAllEpisodes();
  // console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const searchBarLabel = document.getElementById("searchLabel");
  searchBarLabel.innerText = `Displaying ${episodeList.length}/73 Episodes`;

  const rootElem = document.getElementById("root");
  const myEpisodeUl = document.createElement("ul");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach((episode) => {
    const myLi = document.createElement("li");
    myLi.id = episode.id; //applied the episode id to the dom
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

window.onload = setup;

const searchBar = document.getElementById("search");
searchBar.addEventListener("input", handleSearch);
