export default function createEpisodeCode(episode) {
  const episodeNum = episode.number + "";
  const formatEpisodeNum = episodeNum.padStart(2, "0");

  const seasonNum = episode.season + "";
  const formatSeasonNum = seasonNum.padStart(2, "0");

  const episodeNumFormat = `S${formatSeasonNum}E${formatEpisodeNum}`; //S02E07

  return episodeNumFormat;
}
