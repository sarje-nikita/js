// Function declarations are hoisted entirely
console.log(declaredFunction()); // Expected output: I am nikita

function declaredFunction() {
  return "I am a declared function";
}

// Function expressions are not hoisted
//console.log(expressionFunction()); // Error
const expressionFunction = function () {
  return "I am nikita";
};

// Arrow function expressions also are not hoisted
//console.log(arrowFunction()); // Error
const arrowFunction = () => "I am an arrow function";
