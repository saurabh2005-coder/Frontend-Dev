// Q5 - Person -> Student inheritance using constructor functions and prototypes

console.log("=== Q5: Person -> Student (Prototype Inheritance) ===");

// Parent constructor
function Person(name) {
  this.name = name;
}

// Method defined on Person prototype
Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
  // Call Person constructor to initialize name
  Person.call(this, name);
  this.branch = branch;
}

// Inherit from Person.prototype
Student.prototype = Object.create(Person.prototype);

// Fix the constructor reference
Student.prototype.constructor = Student;

// Add method to Student prototype
Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// Another method that uses both
Student.prototype.printDetails = function () {
  this.printName();   // from Person.prototype
  this.printBranch(); // from Student.prototype
};

// Demonstration:
const studentOne = new Student("Anushka", "CSE (AI/ML)");
studentOne.printName();      // inherited from Person
studentOne.printBranch();    // defined in Student
studentOne.printDetails();   // uses both methods

// The prototype chain is: studentOne -> Student.prototype -> Person.prototype -> Object.prototype
