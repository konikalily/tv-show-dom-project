//this file is creating show/episode options on the select input menu

export default function createShowOptions(allShows) {
  const showSelectInput = document.getElementById("show-select-input");
  allShows = allShows.sort((a, b) => {
    //this sorts show names in alphabetical order
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  allShows.forEach((show) => {
    const showOption = document.createElement("option");
    showOption.innerText = show.name;
    showSelectInput.append(showOption); //adding options to the select input
    showOption.value = show.id;
    //console.log(showOption);
  });
}
