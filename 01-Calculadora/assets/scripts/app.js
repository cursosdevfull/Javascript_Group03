const defaultResult = 0;
let currentResult = 0;
const logEntries = [];

function getUserNumberInput() {
  return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, result) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBSTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber ||
    enteredNumber === 0
  ) {
    return;
  }

  if (
    calculationType === 'ADD' ||
    calculationType === 'SUBSTRACT' ||
    calculationType === 'MULTIPLY' ||
    calculationType === 'DIVIDE'
  ) {
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function add() {
  calculationResult('ADD');
}

function subtract() {
  calculationResult('SUBTRACT');
}

function multiply() {
  calculationResult('MULTIPLY');
}

function divide() {
  calculationResult('SQUARE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
