// Outer function that creates a local variable
function createCounter() {
    let count = 0; // Local variable count
  
    // Inner function that accesses 'count' .  [laxical scope]
    return function () {
      count++; // Increments count each time the function is called
      console.log(count);
    };
  }
  
  // Create a counter function instance
  const counter = createCounter();
  counter(); // Expected output: 1
  counter(); // Expected output: 2
  