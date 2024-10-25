fun1()//here we can call the function before declaration
console.log(a)//here we can acesss the varible 'a 'before declaration but it value will be undefind
console.log(b)//this will generate error becusee the varibale declaraed with the let and const are hoisted but it generate a temprol ded zone

function fun1(){
    console.log("hello world");
}

var a=5
let b=9
//type
// var varible hoisting
// let and const -temporl ded zone
// function hoisting
//arrow function dose not get hoisted


