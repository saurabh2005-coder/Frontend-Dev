// Q6 - Prototype chain: Person -> Faculty -> Professor

console.log("=== Q6: Person -> Faculty -> Professor Prototype Chain ===");

// Base constructor
function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Person: My name is ${this.name}.`);
};

// Faculty inherits from Person
function Faculty(name, department) {
  Person.call(this, name); // call Person to set name
  this.department = department;
}

// Inherit prototype from Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`Faculty: I belong to the ${this.department} department.`);
};

// Professor inherits from Faculty
function Professor(name, department, subject) {
  Faculty.call(this, name, department); // call Faculty to set name & department
  this.subject = subject;
}

// Inherit prototype from Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(`Professor: I teach ${this.subject}.`);
};

// Demonstration of full chain:
const professorOne = new Professor("Dr. Anushka", "Computer Science", "Artificial Intelligence");

professorOne.introduce();       // from Person.prototype
professorOne.showDepartment();  // from Faculty.prototype
professorOne.teach();           // from Professor.prototype

// professorOne -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype
