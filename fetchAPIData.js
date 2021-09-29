export default async function fetchAPIData(showId) {
  let response = await fetch(`https://api.tvmaze.com/shows/${showId}/episodes`);
  let jsonData = await response.json();
  const jsonToString = JSON.stringify(jsonData);
  return jsonToString;
}