const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

// Hey, JS, when the button is clicked, have a look at the button of this name (add)
// just the function name without () or ""
addBtn.addEventListener('click', add);
