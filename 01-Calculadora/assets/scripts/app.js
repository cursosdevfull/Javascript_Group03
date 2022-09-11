const defaultResult = 0;
let currentResult = 0;

function add() {
  //const inputEntered = userInput.value;
  //currentResult = currentResult + parseInt(userInput.value);
  currentResult = currentResult + +userInput.value;
  //console.log('add');
  //console.log(currentResult);
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
