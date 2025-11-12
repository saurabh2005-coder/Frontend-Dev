// Q8. Employee Salary Projection
// Instructions followed: current salary, annual increment %, for-loop for 5 years, console.table, rounding and assignment ops.

let currentSalary = 450000;     // base annual salary in INR
const incrementRate = 8;        // percentage per year

const rows = [];
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100;          // apply increment using assignment
  const rounded = Math.round(salary);
  rows.push({ Year: year, "Projected Salary (₹)": rounded, "Increment Rate (%)": incrementRate });
}

console.table(rows);
