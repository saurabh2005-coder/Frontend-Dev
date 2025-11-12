// Q10. Citizen Eligibility Validator
// Instructions followed: nested if-else + logical operators, print outcomes based on age and citizenship.

const age = 19;          // change to test
const isCitizen = true;  // change to test

if (isCitizen && age >= 18 && age <= 20) {
  console.log("Eligible to vote only.");
} else if (isCitizen && age >= 18) {
  console.log("Eligible for all services.");
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
