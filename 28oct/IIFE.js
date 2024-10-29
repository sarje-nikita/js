// Define and immediately invoke a function
(function () {
    const message = "This runs right away!";
    console.log(message); // Expected output: This runs right away!
  })();
  
  // IIFE with parameters
  (function (name) {
    console.log(`Hello, ${name}`); // Logs the greeting with name
  })("Nikita"); // Expected output: Hello, Nikita
  