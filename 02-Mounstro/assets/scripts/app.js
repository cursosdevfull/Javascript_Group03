const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;
const HEALTH_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEALTH = 'PLAYER_HEALTH';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const MAX_LIFE = 100;
const DEFAULT_LIFES = 100;
const MAX_AVAILABLE_LIFE = 3;

let choseMaxLife;
let hasBonusLife = true;
let availableLifes;

const battleLog = [];

function getMaxLifesValues() {
  const enteredValue = prompt(
    'Ingrese el máximo de vida para el jugador y para el mounstro',
    MAX_LIFE
  );

  const parsed = parseInt(enteredValue);

  if (isNaN(parsed) || parsed <= 20) {
    throw { msg: 'Valor inválido ingresado por el usuario' };
  }

  return parsed;
}

function getAvailableLifes() {
  const enteredValueAvailableLifes = prompt(
    'Ingrese la cantidad de bonus disponible',
    MAX_AVAILABLE_LIFE
  );
  availableLifes = parseInt(enteredValueAvailableLifes);

  if (isNaN(availableLifes) || availableLifes < 2 || availableLifes > 4) {
    throw { msg: 'Valor de vidas disponibles no válido' };
  }

  return availableLifes;
}

try {
  choseMaxLife = getMaxLifesValues();
} catch (error) {
  console.log(error);
  choseMaxLife = DEFAULT_LIFES;
  alert(
    `Ocurrió un error y se usará el valor por defecto de ${choseMaxLife} para las vidas`
  );
}

try {
  availableLifes = getAvailableLifes();
} catch (err) {
  console.log(err);
  availableLifes = MAX_AVAILABLE_LIFE;
  alert(
    'Ocurrió un error y se usará el valor por defecto de ${availableLifes} para las "vidas disponibles"'
  );
}

let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

function writeToLog(event, value, monsterHealth, playerHealth) {
  const logEntry = {
    event,
    value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_MONSTER_ATTACK:
    case LOG_EVENT_PLAYER_HEALTH:
      logEntry.target = 'PLAYER';
      break;
    default:
      logEntry = {};
  }

  if (
    event === LOG_EVENT_PLAYER_ATTACK ||
    event === LOG_EVENT_PLAYER_STRONG_ATTACK
  )
    logEntry.target = 'MONSTER';

  if (event === LOG_EVENT_MONSTER_ATTACK || event === LOG_EVENT_PLAYER_HEALTH)
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
    LOG_EVENT_MONSTER_ATTACK,
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
      LOG_EVENT_GAME_OVER,
      'PLAYER WIN',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (monsterWin) {
    alert('Monster win');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WIN',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (draw) {
    alert('Draw');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (playerWin || monsterWin || draw) {
    reset();
  }
}

function attackMonsterHandler(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const eventTypeAttack =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  /* if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    eventTypeAttack = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    eventTypeAttack = LOG_EVENT_PLAYER_STRONG_ATTACK;
  } */

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
    LOG_EVENT_PLAYER_HEALTH,
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
