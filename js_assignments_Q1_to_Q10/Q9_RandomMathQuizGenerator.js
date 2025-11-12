// Q9. Random Math Quiz Generator
// Instructions followed: random numbers 1–20, random operator, switch to compute, division to 2 decimals.

function rand1to20() {
  return Math.floor(Math.random() * 20) + 1;
}

const a = rand1to20();
const b = rand1to20();
const operators = ['+', '-', '*', '/'];
const op = operators[Math.floor(Math.random() * operators.length)];

let answer;

switch (op) {
  case '+':
    answer = a + b;
    break;
  case '-':
    answer = a - b;
    break;
  case '*':
    answer = a * b;
    break;
  case '/':
    // Ensure 2-decimal result for division
    answer = parseFloat((a / b).toFixed(2));
    break;
  default:
    console.log("Unknown operator");
}

console.log(`Question: ${a} ${op} ${b} = ?`);
console.log(`Correct Answer: ${answer}`);
