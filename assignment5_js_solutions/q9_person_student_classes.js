// Q9 - Person -> Student rewritten using ES6 classes with extends and super()

console.log("=== Q9: Person -> Student using ES6 Classes ===");

// ES6 class version
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`Name: ${this.name}`);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name); // calls PersonClass constructor
    this.branch = branch;
  }

  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }

  printDetails() {
    this.printName();
    this.printBranch();
  }
}

// Demonstration:
const studentClassInstance = new StudentClass("Anushka", "CSE (AI/ML)");
studentClassInstance.printName();
studentClassInstance.printBranch();
studentClassInstance.printDetails();

// Behavior comparison comment:
// The ES6 class version works the same way as the constructor+prototype version in Q5.
// Internally, classes still use prototypes under the hood.
