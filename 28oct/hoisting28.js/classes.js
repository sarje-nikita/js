// Classes are not hoisted; they behave like `let` or `const`
// Trying to access the class before declaration throws a ReferenceError
//const instance = new MyClass(); // ReferenceError- Cannot access 'MyClass' before initialization

class MyClass {
    constructor() {
      this.message = "Hello from MyClass!";
    }
  }
  
  // Creating an instance after declaration
  const instance = new MyClass();
  console.log(instance.message); // Expected output: Hello from MyClass!
  