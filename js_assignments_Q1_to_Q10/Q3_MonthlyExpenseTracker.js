// Q3. Monthly Expense Tracker
// Instructions followed: use an array for 5 categories, add 10% tax using assignment operators, use toFixed(2).

const categories = ["food", "travel", "rent", "bills", "leisure"];
// Expenses correspond to the categories above (in INR)
const expenses = [5500, 1200, 10000, 2800, 1800];

const total = expenses.reduce((sum, x) => sum + x, 0);
const average = total / expenses.length;

// Add 10% tax to the total using assignment operators
let finalAmount = total;
finalAmount += finalAmount * 0.10; // +10%

console.log(`Total: ₹${total.toFixed(2)}`);
console.log(`Average: ₹${average.toFixed(2)}`);
console.log(`Final Amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
