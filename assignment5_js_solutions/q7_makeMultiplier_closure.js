// Q7 - Closure example: makeMultiplier

console.log("=== Q7: makeMultiplier (Closure Demo) ===");

// makeMultiplier returns a function that "remembers" the multiplier
function makeMultiplier(multiplier) {
  // The inner function forms a closure over 'multiplier'
  return function (number) {
    return number * multiplier;
  };
}

// Example usage:
const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("triple(5) =", triple(5)); // 15
console.log("double(10) =", double(10)); // 20

/* 
Explanation of closure:
- When we call makeMultiplier(3), it returns an inner function.
- That inner function still has access to the 'multiplier' variable (which is 3),
  even after makeMultiplier has finished executing.
- This "remembering" of outer variables by an inner function is called a closure.
*/
