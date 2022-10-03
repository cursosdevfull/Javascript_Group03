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

function calculationResult(calculationType = 'ADD') {
  console.log('calculationtype', calculationType);
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

addBtn.addEventListener('click', calculationResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculationResult.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculationResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculationResult.bind(this, 'DIVIDE'));
