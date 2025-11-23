// Q3 - this with arrow function vs normal function

console.log("=== Q3: this with Arrow Function vs Normal Function ===");

// Object with arrow function as method
const userWithArrow = {
  name: "Anushka",
  // Arrow function does NOT get its own 'this'
  // 'this' is taken from the surrounding (lexical) scope
  showName: () => {
    console.log("Arrow function -> this.name:", this.name);
  }
};

userWithArrow.showName();
// Explanation:
// In the arrow function, 'this' does not refer to 'userWithArrow'.
// It refers to the outer scope (in strict mode, that's 'undefined'),
// so this.name is 'undefined'.

// Fix: use a normal function expression for methods that use 'this'
const userWithNormalFunction = {
  name: "Anushka",
  showName: function () {
    console.log("Normal function -> this.name:", this.name);
  }
};

userWithNormalFunction.showName();
// Now, 'this' correctly refers to 'userWithNormalFunction', 
// so this.name prints "Anushka".
