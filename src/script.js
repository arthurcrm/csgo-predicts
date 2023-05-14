const csgoDatabaseData = require("./models/csgo-predicts-db-data.json");
const { calculateWinPercentage, checkHowManyRoundsATeamWon } = require("./utils/win_percent_calculator");

function start() {
  // Índice de desempenho do jogador = (kills + assists / 2) - (deaths / 2) + (rounds_vencidos / rounds_jogados) * 100.

  const teamsNames = getTeamNames(csgoDatabaseData);

  teamsNames.forEach((teamName) => {
    const teamWinPercentage = calculateWinPercentage(teamName, csgoDatabaseData);
    const teamRoundWons = checkHowManyRoundsATeamWon(teamName, csgoDatabaseData);

    console.log("A porcentagem de vitoria do time", teamName, "é de", teamWinPercentage, "%");
    console.log("\br");
    console.log("O time", teamName, "venceu", teamRoundWons, "rounds em sua historia.");
  });
}

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

start();
