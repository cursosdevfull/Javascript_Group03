function getPlayerChoice() {
  const selection = prompt(
    'You must choice ROCK, PAPER or SCISSOR'
  ).toUpperCase();

  if (
    selection !== 'ROCK' &&
    selection !== 'PAPER' &&
    selection !== 'SCISSOR'
  ) {
    alert('Only ROCK, PAPER or SCISSOR');
    return;
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

startBtn.addEventListener('click', function () {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  console.log('PlayerChoice', playerChoice, 'ComputerChoice', computerChoice);
});
