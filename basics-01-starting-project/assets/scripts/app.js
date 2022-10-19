const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  // We take 2 global variables (defined in vendor.js) and use them in calculation
  // .value gives us what the user entered AS A STRING!
  // .parseInt() converts a string to a number (if applicable)
  currentResult = currentResult + parseInt(userInput.value);
  // shorter way to convert a string to a number
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, userInput.value);
}

// Hey, JS, when the button is clicked, have a look at the button of this name (add)
// just the function name without () or ""
addBtn.addEventListener('click', add);
