const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;
const HEALTH_VALUE = 20;

const choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;

adjustHealthBars(choseMaxLife);

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Player win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Monster win');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Draw');
  }
}

function attackMonsterHandler(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const mounstroDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= mounstroDamage;

  endRound();
}

function attackHandler() {
  attackMonsterHandler('ATTACK');
}

function strongAttackHandler() {
  attackMonsterHandler('STRONG_ATTACK');
}

function healPlayerHandler() {
  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    return;
  }

  hasBonusLife = false;
  removeBonusLife();

  let healthValue;
  if (currentPlayerHealth >= choseMaxLife - HEALTH_VALUE) {
    alert('Player cannot more life than health maximum');
    healthValue = choseMaxLife - currentPlayerHealth;
  } else {
    healthValue = HEALTH_VALUE;
  }

  currentPlayerHealth += healthValue;
  increasePlayerHealth(healthValue);
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
