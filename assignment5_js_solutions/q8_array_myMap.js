// Q8 - Custom myMap method for all arrays (similar to Array.prototype.map)

console.log("=== Q8: Custom Array.prototype.myMap ===");

// Adding myMap to Array prototype
Array.prototype.myMap = function (callback) {
  const resultArray = [];

  // 'this' refers to the array on which myMap is called
  for (let index = 0; index < this.length; index++) {
    // Check that the index exists on the array (handles sparse arrays)
    if (Object.prototype.hasOwnProperty.call(this, index)) {
      const currentValue = this[index];
      const mappedValue = callback(currentValue, index, this);
      resultArray.push(mappedValue);
    }
  }

  return resultArray;
};

// Demonstration:
const originalArray = [1, 2, 3];

const doubled = originalArray.myMap(function (num) {
  return num * 2;
});

console.log("Original array:", originalArray);
console.log("Doubled with myMap:", doubled);

// You can also use an arrow function as the callback:
const squared = originalArray.myMap(num => num * num);
console.log("Squared with myMap:", squared);
