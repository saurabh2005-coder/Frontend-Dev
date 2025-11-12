// Q5. Weather Activity Planner
// Instructions followed: use temperature, isRaining, windSpeed; combine && and ||; follow the decision order.

const temperature = 27;    // in °C
const isRaining = false;   // boolean
const windSpeed = 12;      // in km/h

let advice = "";

if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advice = "Too cold and windy — stay home.";
} else {
  // Example of combined condition: a slightly windy but nice day OR mild temps
  if ((windSpeed <= 20 && temperature >= 18) || (temperature >= 15 && temperature <= 30)) {
    advice = "Perfect day for a walk.";
  } else {
    advice = "Conditions are mixed — plan accordingly.";
  }
}

console.log(advice);
