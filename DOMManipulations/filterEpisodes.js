//this function is for, when users types something to search an episode 

export default function filterEpisodes(event, allEpisodes) {
  const inputValue = event.target.value;
  const lowerCaseInput = inputValue.toLowerCase();
  // should be checking to see if what is typed in the search,
  // box is in the episode summary or the episode name
  const filteredEpisodes = allEpisodes.filter((episode) => {
    
    const nameLowerCase = episode.name.toLowerCase();
    const summaryLowerCase = episode.summary.toLowerCase();

    return (
      nameLowerCase.includes(lowerCaseInput) ||
      summaryLowerCase.includes(lowerCaseInput)
    );
  });

  return filteredEpisodes;
}
