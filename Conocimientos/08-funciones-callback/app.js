const showResultInSpanish = (result) => {
  const message = `El resultado es ${result}`;
  alert(message);
};

const showResultInEnglish = (result) => {
  const message = `Result is ${result}`;
  alert(message);
};

const showResultInPortugues = (result) => {
  const message = `O resultado é ${result}`;
  alert(message);
};

const sum = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum += validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

const subtract = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum -= validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

const multiply = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 1 : number);

  let accum = 1;
  for (const number of numbers) {
    accum *= validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

sum(showResultInPortugues, 10, 30, 30, 40);
subtract(showResultInSpanish, 100, 20, 38, 109);
multiply(showResultInSpanish, 10, 3, 4);
