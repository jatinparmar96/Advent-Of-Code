const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.time("start");
  const input = data
    .toString()
    .split("\n")
    .map((i) => i.split(" "));
  solve2(input);
  solve2_1(input);
});

const symbolMap = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const outcome = {
  win: 6,
  draw: 3,
  loss: 0,
};

const scores = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const endOutcomeMap = {
  X: outcome.loss,
  Y: outcome.draw,
  Z: outcome.win,
};

const winConditions = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
const lossCondition = {
  Rock: "Paper",
  Paper: "Scissors",
  Scissors: "Rock",
};

const solve2 = (input) => {
  const opponent = input.map((i) => i[0]);
  const user = input.map((i) => i[1]);

  let userScore = [];

  for (let i = 0; i < opponent.length; i++) {
    const opponentMove = symbolMap[opponent[i]];
    const userMove = symbolMap[user[i]];

    if (userMove === opponentMove) {
      userScore.push(scores[userMove] + outcome.draw);
    }
    if (winConditions[userMove] === opponentMove) {
      //Win
      userScore.push(scores[userMove] + outcome.win);
    }
    if (lossCondition[userMove] === opponentMove) {
      //Loss
      userScore.push(scores[userMove] + outcome.loss);
    }
  }
  const totalScore = userScore.reduce((acc, i) => acc + i, 0);
  console.log({ solve2: totalScore });
};

const solve2_1 = (input) => {
  const opponent = input.map((i) => i[0]);
  const howToEndSymbolArray = input.map((i) => i[1]);
  let userScore = 0;

  for (let i = 0; i < howToEndSymbolArray.length; i++) {
    const howToEnd = endOutcomeMap[howToEndSymbolArray[i]];

    const opponentSymbol = symbolMap[opponent[i]]
    
    if (howToEnd === outcome.win) {
      userScore += outcome.win;
      userScore += scores[lossCondition[opponentSymbol]];
    }
    if (howToEnd === outcome.draw) {
      userScore += outcome.draw;
      userScore += scores[opponentSymbol];

    }
    if (howToEnd === outcome.loss) {
      userScore += outcome.loss;
      userScore += scores[winConditions[opponentSymbol]];
    }
  }

  console.log({ solve2_1: userScore });
};
