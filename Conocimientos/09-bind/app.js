const showResult = (message, result) => {
  alert(message, result);
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

  resultHandler('Result of subtract is ' + accum);

  return accum;
};

const multiply = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 1 : number);

  let accum = 1;
  for (const number of numbers) {
    accum *= validateNumber(number);
  }

  resultHandler('Result of multiply is ' + accum);

  return accum;
};

sum(showResult.bind(this, 'Result of sum is '), 10, 30, 30, 40);
/* subtract(showResult, 100, 20, 38, 109);
multiply(showResult, 10, 3, 4); */
