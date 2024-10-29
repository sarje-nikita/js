// Using var: hoisted with undefined
console.log(varVariable); // Expected output: undefined
var varVariable = "I am a var variable";

// Using let: declared but not initialized
//console.log(letVariable); // Cannot access 'letVariable' before initialization [temp dead zone]
let letVariable = "I am a let variable";

// Using const: declared but not initialized
//console.log(constVariable); // Cannot access 'constVariable' before initialization [temp dead zone]
const constVariable = "I am a const variable";
