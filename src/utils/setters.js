function setMatchType(quantityOfRepeatedMatches) {
  if (quantityOfRepeatedMatches >= 3) {
    return "MD5";
  } else if (quantityOfRepeatedMatches > 1 && quantityOfRepeatedMatches < 3) {]
    return "MD3";
  }

  return "MD1";
}

function setMatchup(match, repeatedMatchesCounter) {
  const matchType = setMatchType(repeatedMatchesCounter);
  return `${match.match_team1_name} vs ${match.match_team2_name} - Mapa: ${match.match_map} - Tipo Partida: ${matchType} - Vencedor: ${
    match.match_team1_total_rounds > match.match_team2_total_rounds ? match.match_team1_name : match.match_team2_name
  }`;
}

module.exports = {
  setMatchup,
};
