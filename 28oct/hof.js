// Define a function that accepts another function as an argument
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Higher-order function that accepts a callback function and a name as arguments
  function sayHello(callback, name) {
    // Call the callback with the provided name
    return callback(name);
  }
  
  // Use sayHello, passing greet as the callback function
  console.log(sayHello(greet, "Nikita")); // Expected output: Hello, Nikita!
  