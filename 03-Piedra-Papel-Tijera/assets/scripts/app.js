function getPlayerChoice() {
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
}

function getComputerChoice() {
  const randomValue = Math.random();

  const selection =
    randomValue < 0.34 ? 'ROCK' : randomValue < 0.67 ? 'PAPER' : 'SCISSOR';

  /* if (randomValue < 0.34) {
    selection = 'ROCK';
  } else if (randomValue < 0.67) {
    selection = 'PAPER';
  } else {
    selection = 'SCISSOR';
  } */

  return selection;
}

function getWinner(computerChoice, playerChoice = 'ROCK') {
  const winner =
    computerChoice === playerChoice
      ? 'DRAW'
      : (computerChoice === 'ROCK' && playerChoice === 'SCISSOR') ||
        (computerChoice === 'PAPER' && playerChoice === 'ROCK') ||
        (computerChoice === 'SCISSOR' && playerChoice === 'PAPER')
      ? 'COMPUTER_WINNER'
      : 'PLAYER_WINNER';

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
}

startBtn.addEventListener('click', function () {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  const message = `Your choice: ${
    playerChoice || 'ROCK'
  }. The computer's choice: ${computerChoice}. Result = ${
    winner === 'DRAW'
      ? 'Empate'
      : winner === 'COMPUTER_WINNER'
      ? 'Ganó la computadora'
      : 'Usted ganó'
  }`;

  alert(message);

  /* console.log('PlayerChoice', playerChoice, 'ComputerChoice', computerChoice); */
});
