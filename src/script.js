const csgoDatabaseData = require("./models/csgo-predicts-db-data.json");
const { calculateWinPercentage } = require("./utils/win_percent_calculator");

function start() {
  // Índice de desempenho do jogador = (kills + assists / 2) - (deaths / 2) + (rounds_vencidos / rounds_jogados) * 100.

  console.log(teamWinPercentage);
  const teamsNames = []; // sua funcao;

  teamsNames.forEach((teamName) => {
    const teamWinPercentage = calculateWinPercentage(teamName, csgoDatabaseData);
  });
}

start();
