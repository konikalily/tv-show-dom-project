import createEpisodeCode from "./createEpisodeCode.js";

//this file is creating episode option on the select input menu
export default function createEpisodeOptions(allEpisodes) {
  const episodeSelectInput = document.getElementById("episode-select-input");
  episodeSelectInput.innerHTML = `<option value="">--Please choose an episode--</option>`;

  allEpisodes.forEach((episode) => {
    const episodeOption = document.createElement("option");

    episodeOption.innerText = `${createEpisodeCode(episode)} - ${episode.name}`; //formatting eposide titles S01E01
    episodeOption.id = `option-${episode.id}`;
    episodeOption.value = `episode-${episode.id}`;
    episodeSelectInput.append(episodeOption);
  });
}
