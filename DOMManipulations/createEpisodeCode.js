//this function is creating episodes and display format
export default function createEpisodeCode(episode) {
  const episodeNum = episode.number + "";
  const formatEpisodeNum = episodeNum.padStart(2, "0");

  const seasonNum = episode.season + "";
  const formatSeasonNum = seasonNum.padStart(2, "0");

  const episodeNumFormat = `S${formatSeasonNum}E${formatEpisodeNum}`; //this formate the episode numbering as = S02E07.

  return episodeNumFormat;
}
