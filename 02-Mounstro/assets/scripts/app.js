const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;
const HEALTH_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;
let availableLifes = 3;

const battleLog = [];

const enteredValueLifes = prompt(
  'Ingrese el máximo de vida para el jugador y para el mounstro',
  '100'
);

choseMaxLife = parseInt(enteredValueLifes);

if (isNaN(choseMaxLife) || choseMaxLife <= 20) {
  choseMaxLife = 100;
}

const enteredValueAvailableLifes = prompt(
  'Ingrese la cantidad de bonus disponible',
  '3'
);
availableLifes = parseInt(enteredValueAvailableLifes);

if (isNaN(availableLifes) || availableLifes < 2 || availableLifes > 4) {
  availableLifes = 3;
}

function writeToLog(event, value, monsterHealth, playerHealth) {
  const logEntry = {
    event,
    value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  if (event === 'PLAYER_ATTACK' || event === 'PLAYER_STRONG_ATTACK')
    logEntry.target = 'MONSTER';

  if (event === 'MONSTER_ATTACK' || event === 'PLAYER_HEALTH')
    logEntry.target = 'PLAYER';

  battleLog.push(logEntry);
}

adjustHealthBars(choseMaxLife);

function reset() {
  currentMonsterHealth = choseMaxLife;
  currentPlayerHealth = choseMaxLife;
  hasBonusLife = true;
  availableLifes = 3;
  resetGame(choseMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  const playerWin = currentMonsterHealth <= 0 && currentPlayerHealth > 0;
  const monsterWin = currentPlayerHealth <= 0 && currentMonsterHealth > 0;
  const draw = currentPlayerHealth <= 0 && currentMonsterHealth <= 0;

  writeToLog(
    'MONSTER_ATTACK',
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
  }

  if (playerWin) {
    alert('Player win');
    writeToLog(
      'GAME OVER',
      'PLAYER WIN',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (monsterWin) {
    alert('Monster win');
    writeToLog(
      'GAME OVER',
      'MONSTER WIN',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (draw) {
    alert('Draw');
    writeToLog('GAME OVER', 'DRAW', currentMonsterHealth, currentPlayerHealth);
  }

  if (playerWin || monsterWin || draw) {
    reset();
  }
}

function attackMonsterHandler(mode) {
  let maxDamage;
  let eventTypeAttack;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    eventTypeAttack = 'PLAYER_ATTACK';
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    eventTypeAttack = 'PLAYER_STRONG_ATTACK';
  }

  const mounstroDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= mounstroDamage;

  writeToLog(
    eventTypeAttack,
    mounstroDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function attackHandler() {
  attackMonsterHandler(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonsterHandler(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0 || !hasBonusLife) {
    return;
  }

  if (availableLifes > 0) {
    availableLifes--;

    if (!availableLifes) {
      hasBonusLife = false;
      removeBonusLife();
    }
  }

  let healthValue;
  if (currentPlayerHealth >= choseMaxLife - HEALTH_VALUE) {
    alert('Player cannot more life than health maximum');
    healthValue = choseMaxLife - currentPlayerHealth;
  } else {
    healthValue = HEALTH_VALUE;
  }

  currentPlayerHealth += healthValue;
  increasePlayerHealth(healthValue);

  writeToLog(
    'PLAYER_HEALTH',
    healthValue,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function printLogHandler() {
  console.table(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
