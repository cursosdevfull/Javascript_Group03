const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

const choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackMonsterHandler(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const mounstroDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= mounstroDamage;
  const playerDamage = dealPlayerDamage(maxDamage);
  currentPlayerHealth -= playerDamage;

  alert('Attack detected');
}

function attackHandler() {
  attackMonsterHandler('ATTACK');
}

function strongAttackHandler() {
  attackMonsterHandler('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
