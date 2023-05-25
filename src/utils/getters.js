const { setMatchup } = require("./setters");

function getTeamNames(matches) {
  const TeamsName = [];

  matches.forEach((match) => {
    const [team1, team2] = [match.match_team1_name, match.match_team2_name];

    if (!TeamsName.includes(team1)) {
      TeamsName.push(team1);
    }

    if (!TeamsName.includes(team2)) {
      TeamsName.push(team2);
    }
  });
  return TeamsName;
}

function getMaps(matches) {
  const maps = [];

  matches.forEach((match) => {
    const [team_map] = [match.match_map];

    if (!maps.includes(team_map)) {
      maps.push(team_map);
    }
  });
  return maps;
}

function getMatchups(matches) {
  const matchups = [];
  let repeatedMatchesCounter = 0;
  let teamOneWinCount = 0;
  let teamTwoWinCount = 0;

  console.log(matches[0]);
  console.log(matches[1]);
  console.log(matches[2]);

  matches.forEach((match, index) => {
    if (index > 0) {
      if (match.match_map_stat_ids === matches[index - 1].match_map_stat_ids) {
        repeatedMatchesCounter++;
      } else {
        repeatedMatchesCounter = 0;
      }
    }

    matchups.push(setMatchup(match, repeatedMatchesCounter));
  });

  return matchups;
}

module.exports = {
  getTeamNames,
  getMaps,
  getMatchups,
  getMatchType,
};
