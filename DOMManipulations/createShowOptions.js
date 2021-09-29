//this file is creating episode option on the select input menu
export default function createShowOptions(allShows) {
  const showSelectInput = document.getElementById("show-select-input");

  allShows.forEach((show) => {
    //console.log(show.name);
    const showOption = document.createElement("option");

    showOption.innerText = show.name;
    showSelectInput.append(showOption);
    showOption.value = show.id;

    // episodeOption.id = `option-${episode.id}`;
    // episodeOption.value = `episode-${episode.id}`;
    // episodeMenu.append(episodeOption);
  });
}
