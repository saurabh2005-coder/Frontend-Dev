// Q2 - Higher-order function applyOperation

// applyOperation takes an array of numbers and a callback (operation).
// It returns a new array where the callback has been applied to each element.
function applyOperation(numbersArray, operationCallback) {
  const resultArray = [];

  for (let index = 0; index < numbersArray.length; index++) {
    const originalNumber = numbersArray[index];
    const transformedNumber = operationCallback(originalNumber, index, numbersArray);
    resultArray.push(transformedNumber);
  }

  return resultArray;
}

// Callback to double a number
function doubleNumber(num) {
  return num * 2;
}

// Callback to square a number
function squareNumber(num) {
  return num * num;
}

// Demonstration:
console.log("=== Q2: applyOperation Demo ===");
const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, doubleNumber);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

const squaredNumbers = applyOperation(numbers, squareNumber);
console.log("Squared numbers:", squaredNumbers);
