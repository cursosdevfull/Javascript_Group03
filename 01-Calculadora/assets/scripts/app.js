const defaultResult = 0;
let currentResult = 0;
currentResult = ((currentResult + 10) * 3) / 2 - 1;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

/* const additionalResult = add(20, 30)
currentResult = additionalResult */

currentResult = add(20, 30);

let calculationDescription = `(
    (${defaultResult} + 10) * 3)
    / 2
    - 1
`;

//let errorMessage = "An error's occurred!";

outputResult(currentResult, calculationDescription);
