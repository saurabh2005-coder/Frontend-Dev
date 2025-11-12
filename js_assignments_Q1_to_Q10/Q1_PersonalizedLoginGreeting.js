// Q1. Personalized Login Greeting
// Instructions followed: time-based greeting using Date().getHours(), template literals, and clear formatting.

// Change this to test with different names
const userName = "Vanshika";

const currentHour = new Date().getHours();
let message = "";

if (currentHour < 12) {
  message = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  message = `Good Afternoon ${userName}!`;
} else {
  message = `Good Evening ${userName}!`;
}

console.log(message);
