const csgoDatabaseData = require("./models/csgo-predicts-db-data.json");
const { calculateWinPercentage, checkHowManyRoundsATeamWon, checkHowManyTimesATeamWon } = require("./utils/win_percent_calculator");
const { getMaps, getTeamNames, getMatchups } = require("./utils/getters");
const fs = require("fs");

function start() {
  const teamsNames = getTeamNames(csgoDatabaseData);

  const maps = getMaps(csgoDatabaseData);

  const newDatabaseData = {
    teams: teamsNames.map((teamName) => teamName),
    maps,
    team_history: teamsNames.map((teamName) => checkHowManyTimesATeamWon(teamName, csgoDatabaseData)),
    team_win_percent: teamsNames.map((teamName) => calculateWinPercentage(teamName, csgoDatabaseData).toFixed(2)),
    team_won_rounds: teamsNames.map((teamName) => checkHowManyRoundsATeamWon(teamName, csgoDatabaseData)),
    matchups: getMatchups(csgoDatabaseData),
  };

  fs.writeFileSync("database-matchups-data.json", JSON.stringify(newDatabaseData));
}

start();
