const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return DRAW;
//   } else if (
// (cChoice === ROCK && pChoice === PAPER) ||
// (cChoice === PAPER && pChoice === SCISSORS) ||
// (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

// Rewriting getWinner as a ternary expression
// You can omit return keyword and {} as if it would be one line
const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// const add = (a, b) => a + b;

// const add2 = function (a, b) {
//   return a + b;
// };

// startGame();
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, you `;
  if (winner === RESULT_DRAW) {
    message = message + 'have a draw!';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won!';
  } else {
    message = message = message + 'lost!';
  }
  alert(message);
  gameIsRunning = false;
});

// not relating to the game;
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (num of numbers) {
    if (operation === 'ADD') {
      sum = sum + validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const substactUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     // don't use that!
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  'fsda',
  5,
  -2,
  6,
  10
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  3,
  5,
  -2,
  6,
  10,
  20,
  35
);
combine(
  showResult.bind(this, 'The result after substracting all numbers is:'),
  'SUBSTRACT',
  3,
  5,
  2,
  6,
  10
);
