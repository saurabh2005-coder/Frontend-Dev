// Q4 - Constructor function Car with prototype method getDetails

// Constructor function
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Prototype method shared by all Car instances
Car.prototype.getDetails = function () {
  console.log(`Car details: Brand = ${this.brand}, Model = ${this.model}`);
};

console.log("=== Q4: Car Prototype Demo ===");

// Creating two Car objects
const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

// Calling shared prototype method
carOne.getDetails();
carTwo.getDetails();

// Both objects share the same getDetails method via Car.prototype
