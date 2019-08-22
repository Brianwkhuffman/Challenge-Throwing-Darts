function scoreCalculator(arr) {
  let score = 0;
  let counter = 0;
  if (!arr || arr.length === 0) {
    score--;
    return score;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 20) {
      return 'Scores need to be below 20';
    }
    if (arr[i] >= 5 && arr[i] <= 10) {
      score += 5;
    };
    if (arr[i] < 5) {
      score += 10;
      counter++;
    };
  };
  if (counter === arr.length) {
    score += 100;
  };
  return score;
};
// console.log(scoreCalculator());
module.exports = scoreCalculator;
