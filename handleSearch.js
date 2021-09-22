function handleSearch(event) {
    const inputValue = event.target.value;
    const lowerCaseInput=inputValue.toLowerCase();
  
    const filteredEpisodes = allEpisodes.filter(episode=>{

      const nameLowerCase = episode.name.toLowerCase()
      const summaryLowerCase = episode.summary.toLowerCase();

      return (
        nameLowerCase.includes(lowerCaseInput) || 
        summaryLowerCase.includes(lowerCaseInput)
      )
    })

  const searchBarLabel = document.getElementById('searchLabel');
  searchBarLabel.innerText = `Displaying ${filteredEpisodes.length}/73 Episodes`
    
  allEpisodes.forEach(episode => {
    const episodeElement = document.getElementById(episode.id)
    episodeElement.style.display = "none"
  })

  filteredEpisodes.forEach(episode => {
    const episodeElement = document.getElementById(episode.id)
    episodeElement.style.display = "block"
  })
  
  const episodeMenu = document.getElementById("episodeMenu")
  filteredEpisodes.forEach(episode => {
      const episodeOption = document.createElement('option');
      episodeOption.id = episode.id;
    // create an option element
    // set the text content to this format "S01E01 - Winter is Coming"
    // set the value to be the id of the episode 
  })
}