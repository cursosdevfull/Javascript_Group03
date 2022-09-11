const defaultResult = 0;
let currentResult = 0;

//currentResult = 20;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

// let calculationDescription = '((' + defaultResult + ' + 10) * 3) / 2 - 1';
let calculationDescription = `(
    (${defaultResult} + 10) * 3)
    / 2
    - 1
`;

let errorMessage = "An error's occurred!";

outputResult(currentResult, errorMessage);
