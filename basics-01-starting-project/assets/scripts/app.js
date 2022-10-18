const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// the same output as in the line above (interpolation)
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// If you add \n, it will be rendered without linebreak until you add CSS styling like h2{white-space: pre} to show this linebreak
let errorMessage = 'Some weird \n' + 'error message';

outputResult(currentResult, errorMessage);
