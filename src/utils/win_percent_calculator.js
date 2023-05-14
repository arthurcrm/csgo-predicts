function calculateWinPercentage(teamName, matches) {
  let resultWins = checkHowManyTimesATeamWon(teamName, matches);
  let resultLoss = checkHowManyTimesATeamLost(teamName, matches);
  return (resultWins / (resultWins + resultLoss)) * 100;
}

function checkHowManyTimesATeamWon(teamName, matches) {
  let teamWonCounter = 0;
  matches.forEach((match) => {
    if (match.match_team2_name || match.match_team1_name == teamName) {
      const winnerTeam = checkWhichTeamWon(match);

      if (winnerTeam == teamName) {
        teamWonCounter++;
      }
    }
  });
  return teamWonCounter;
}

function checkWhichTeamWon(match) {
  if (match.match_team1_total_rounds > match.match_team2_total_rounds) {
    return match.match_team1_name;
  } else {
    return match.match_team2_name;
  }
}

function checkHowManyTimesATeamLost(teamName, matches) {
  let teamLossCounter = 0;
  matches.forEach((match) => {
    if (match.match_team2_name || match.match_team1_name == teamName) {
      const loserTeam = checkWhichTeamLost(match);

      if (loserTeam == teamName) {
        teamLossCounter++;
      }
    }
  });
  return teamLossCounter;
}

function checkWhichTeamLost(match) {
  if (match.match_team1_total_rounds < match.match_team2_total_rounds) {
    return match.match_team1_name;
  } else {
    return match.match_team2_name;
  }
}

module.exports = {
  calculateWinPercentage,
};
