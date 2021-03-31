let calculatorDisplay = document.getElementById("calculatorDisplay");
let decimalAllowed = true;
let preventMultipleOperators = true;


function inputNumberFunction(number) {
  if (calculatorDisplay.value === "0") {
    calculatorDisplay.value.replace((calculatorDisplay.value = number));
  } else {
    calculatorDisplay.value += number;
  }
  preventMultipleOperators = true;
}

function inputDecimalFunction(operator) {
  if (decimalAllowed === true) {
    calculatorDisplay.value += operator;
    decimalAllowed = false;
  }
}
function operatorKeyFunction(operator) {
  if (calculatorDisplay.value === "0" && operator === "-") {
    calculatorDisplay.value.replace((calculatorDisplay.value = operator));
    preventMultipleOperators = false;
  } else if (preventMultipleOperators === true) {
    calculatorDisplay.value += operator;
    decimalAllowed = true;
    preventMultipleOperators = false;
  }
}

function clearOneEntryFunction() {
  calculatorDisplay.value = calculatorDisplay.value.substring(
    0,
    calculatorDisplay.value.length - 1
  );
}
function clearAllFunction() {
  calculatorDisplay.value = "0";
}

function calculateResult() {
  let result = (calculatorDisplay.value = eval(calculatorDisplay.value));
  if (result === Infinity) {
    alert("Can't divide by 0!");
    clearAllFunction();
  }
}

let keys = document.querySelector(".allKeys");
keys.addEventListener("click", function(e) {
  let key = e.target;
  let value = key.value;

  if (!e.target.matches("button")) {
    return;
  }
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      operatorKeyFunction(value);
      break;
    case ".":
      inputDecimalFunction(value);
      break;
    case "=":
      calculateResult(value);
      break;
    case "CA":
      clearAllFunction();
      break;
    case "CE":
      clearOneEntryFunction();
      break;
    default:
      inputNumberFunction(value);

      break;
  }
});