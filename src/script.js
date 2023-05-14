const csgoDatabaseData = require("./models/csgo-predicts-db-data.json");

function start() {
  // Índice de desempenho do jogador = (kills + assists / 2) - (deaths / 2) + (rounds_vencidos / rounds_jogados) * 100.
  // Índice de desempenho do jogador <=60 = ruim

  /*
     Índice de desempenho do time = (Índice de desempenho do jogador 1 + ... + Índice de desempenho do jogador n) / n
  */

  console.log(csgoDatabaseData[0]);
  let contador = 0;

  csgoDatabaseData.forEach((match) => {
    if (match.match_map == "de_mirage") {
      contador++;
    }
  });

  let result = checkHowManyTimesATeamWon("Liquid", csgoDatabaseData);
  console.log("result", result);

  // ["time1", "time2", "time3", "time4", "time5"].forEach((teamName) => {
  //   checkHowManyTimesATeamWon(teamName, matches);
  // });
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

start();
