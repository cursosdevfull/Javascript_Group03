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

function writeToLog(operationIdentifier, prevResult, operationNumber, result) {}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntries[0]);
  console.log(logEntry.operation);
  console.log(logEntry['number']);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  const logEntry = {
    operation: 'SUBTRACT',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  const logEntry = {
    operation: 'MULTIPLY',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  const logEntry = {
    operation: 'DIVIDE',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
