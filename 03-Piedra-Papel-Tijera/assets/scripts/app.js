const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_PLAYER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINNER = 'COMPUTER_WINNER';
const RESULT_PLAYER_WINNER = 'PLAYER_WINNER';

const getPlayerChoice = () => {
  let selection = prompt(
    'You must choice ROCK, PAPER or SCISSOR'
  ).toUpperCase();

  if (
    selection !== 'ROCK' &&
    selection !== 'PAPER' &&
    selection !== 'SCISSOR'
  ) {
    alert('Only ROCK, PAPER or SCISSOR');

    const randomValue = Math.random();

    selection =
      randomValue < 0.34 ? 'ROCK' : randomValue < 0.67 ? 'PAPER' : 'SCISSOR';

    return selection;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  const selection =
    randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSOR;

  /* if (randomValue < 0.34) {
    selection = 'ROCK';
  } else if (randomValue < 0.67) {
    selection = 'PAPER';
  } else {
    selection = 'SCISSOR';
  } */

  return selection;
};

const getWinner = (computerChoice, playerChoice = DEFAULT_PLAYER_CHOICE) => {
  const winner =
    computerChoice === playerChoice
      ? RESULT_DRAW
      : (computerChoice === ROCK && playerChoice === SCISSOR) ||
        (computerChoice === PAPER && playerChoice === ROCK) ||
        (computerChoice === SCISSOR && playerChoice === PAPER)
      ? RESULT_COMPUTER_WINNER
      : RESULT_PLAYER_WINNER;

  /*  let winner;

  if (computerChoice === playerChoice) {
    winner = 'DRAW';
  } else if (
    (computerChoice === 'ROCK' && playerChoice === 'SCISSOR') ||
    (computerChoice === 'PAPER' && playerChoice === 'ROCK') ||
    (computerChoice === 'SCISSOR' && playerChoice === 'PAPER')
  ) {
    winner = 'COMPUTER_WINNER';
  } else {
    winner = 'PLAYER_WINNER';
  } */

  return winner;

  // return "PLAYER_WINNER"
  // return "COMPUTER_WINNER"
  // return "DRAW"
};

let gameIsRunning = false;

startBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  const message = `Your choice: ${
    playerChoice || DEFAULT_PLAYER_CHOICE
  }. The computer's choice: ${computerChoice}. Result = ${
    winner === RESULT_DRAW
      ? 'Draw'
      : winner === RESULT_COMPUTER_WINNER
      ? 'Computer won'
      : 'You won'
  }`;

  alert(message);

  gameIsRunning = false;

  /* console.log('PlayerChoice', playerChoice, 'ComputerChoice', computerChoice); */
});
