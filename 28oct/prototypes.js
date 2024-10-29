// Define a constructor function for a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the prototype of Person
  Person.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Instantiate a new Person object
  const nikita = new Person("Nikita", 25);
  nikita.sayHello(); // Expected output: Hi, I'm Nikita and I'm 25 years old.
  