// Named class expression (cannot be hoisted)
//const myCar = new Car(); // ReferenceError- Cannot access 'Car' before initialization
const Car = class {
    constructor(model) {
      this.model = model;
    }
  };
  
  // Creating an instance of the class
  const myCar = new Car("Tesla");
  console.log(myCar.model); // Expected output: Tesla
  
  // Function expressions, similar to arrow functions, are not hoisted
  //myFunc(); // Error
  const myFunc = function () {
    console.log("I am a function expression");
  };
  
  myFunc(); // Expected output: I am a function expression
  