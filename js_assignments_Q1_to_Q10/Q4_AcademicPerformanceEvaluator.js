// Q4. Academic Performance Evaluator
// Instructions followed: marks array (5 subjects), average/percentage, logical checks for Distinction/Promoted/Detained,
// and validation: if any subject < 35 => Detained.

// Enter marks for 5 subjects out of 100
const marks = [88, 79, 91, 85, 90]; // change values to test

// Validation: if any subject < 35 -> Detained
const hasFail = marks.some(m => m < 35);

const total = marks.reduce((s, m) => s + m, 0);
const percentage = (total / (marks.length * 100)) * 100; // out of 100%

if (hasFail) {
  console.log("Detained (one or more subjects below 35).");
} else {
  if (percentage >= 85) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50 && percentage <= 84) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}

console.log(`Total: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
