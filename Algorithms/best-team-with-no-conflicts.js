/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let highest = 0;
  const team = ages
    .map((age, i) => ({ age, score: scores[i], sum: 0 }))
    .sort((a, b) => a.score - b.score)
    .sort((a, b) => a.age - b.age);
  for (let i = 0; i < team.length; i++) {
    let sum = team[i].score;
    for (let j = 0; j < i; j++) {
      if (team[j].age === team[i].age || team[j].score <= team[i].score)
        sum = Math.max(team[i].score + team[j].sum, sum);
    }
    team[i].sum = sum;
    highest = Math.max(sum, highest);
  }
  return highest;
};
