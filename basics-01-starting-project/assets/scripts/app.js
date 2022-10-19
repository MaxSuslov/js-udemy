const defaultResult = 0;
let currentResult = defaultResult;



function add() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber);
  outputResult(currentResult, calcDescription);
}

// Hey, JS, when the button is clicked, have a look at the button of this name (add)
// just the function name without () or ""
addBtn.addEventListener('click', add);
