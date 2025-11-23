// Q1 - Callback demonstration: greetUser and showEndMessage

// greetUser takes a name and a callback function.
// It first prints a greeting, then calls the callback.
function greetUser(userName, callbackFunction) {
  console.log(`Hello ${userName}`);
  // After greeting, execute the callback to show the end message
  callbackFunction();
}

// This callback prints the final message.
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Demonstration of callback flow:
console.log("=== Q1: Callback Flow Demo ===");
greetUser("Anushka", showEndMessage);
