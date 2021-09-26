import createEpisodeCode from "./createEpisodeCode.js";
export default function createEpisodeOptions(allEpisodes) {
  const episodeMenu = document.getElementById("episodeMenu");

  allEpisodes.forEach((episode) => {
    const episodeOption = document.createElement("option");
    // episodeOption.innerHTML = `<a 
    //         href="#${`episode-${episode.id}`}"
    //     >
    //         ${createEpisodeCode(episode)} - ${episode.name}
    //     </a>`;

    episodeOption.innerText = `${createEpisodeCode(episode)} - ${episode.name}`;
    episodeOption.id = `option-${episode.id}`;
    episodeOption.value = `episode-${episode.id}`;
    episodeMenu.append(episodeOption);
  });
}
