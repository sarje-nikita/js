// Define an object with properties

function greet(city) {
    // 'this.name' references the name property of the object calling it
    console.log(`Hi, I'm ${this.name} from ${city}`);
  }
  
  const person = {
    name: "Nikita",
  };
  
  // Using call to invoke the function with first arg as context (object) then require args for function calling
  greet.call(person, "Natepute"); // Expected output: Hi, I'm Alex from Natepute
  
  // Using apply (same as call, but arguments are in an array)
  greet.apply(person, ["Pune"]); // Expected output: Hi, I'm Sam from Pune
  
  // Using bind to create a new function with a bound 'this' value this does not exicute insterd return an finction with there own this context
  const greetNikita = greet.bind(person);
  greetNikita("mumbai"); // Expected output: Hi, I'm Nikita from mumbai
  