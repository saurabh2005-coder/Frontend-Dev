// Q7. Smart Guessing Game (Number Range)
// Instructions followed: random secret (1–50), compare with userGuess, nested/logic for close/high/low.

const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 23; // test value

console.log(`Secret (for testing): ${secret}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secret) {
  console.log("Correct guess!");
} else {
  const delta = Math.abs(secret - userGuess);
  if (delta <= 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secret) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}
