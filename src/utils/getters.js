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
  matches.forEach((match) => {
    matchups.push(
      `${match.match_team1_name} vs ${match.match_team2_name} - ${match.match_map} - Vencedor: ${
        match.match_team1_total_rounds > match.match_team2_total_rounds ? match.match_team1_name : match.match_team2_name
      }`
    );
  });

  return matchups;
}

module.exports = {
  getTeamNames,
  getMaps,
  getMatchups,
};
