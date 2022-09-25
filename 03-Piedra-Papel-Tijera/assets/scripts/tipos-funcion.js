//startGame();
const game = {
  title: 'Juego Piedra, Papel y Tijera',
  start: function start() {
    console.log('Game started');
  },
};

console.log(typeof startGame);
console.dir(startGame);

//startBtn.addEventListener('click', game.start);
startBtn.addEventListener('click', startGame);

function startGame() {
  console.log('Game is starting...');
}

/* const startGame = function () {
  console.log('Game is starting');
};
 */
