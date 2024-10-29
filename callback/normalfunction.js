//1 syntax:normal functions use function keyword while arrow function use=>
    function sayHi(name){
        console.log(`hi $ (name)`)
    }

    const sayHiArrow=(name)=>{
        console.log(`hi $ {name}`)
    }
    sayHi("nikita")
    sayHiArrow("nikita")

 //2 this binding: normal function have there own this binding ,determin by how they are called 
 //arrow function inherite the this binding of their anclosing scope

 let obj = {
    name: "john",
    printName: function() {
        console.log(`My name is ${this.name}`);
    },
    printNameArrow: () => {
        console.log(`My name is ${this.name}`);
    }
};

obj.printName();        // Output: "My name is john"
obj.printNameArrow();    // Output: "My name is undefined"

//argument object
//normal function have there own argument object
//arrow function do not have thire own  argument
function printArgument(){
    console.log(arguments)
}
const printArgumentArrow=()=>{
    console.log(arguments)
}

//new keyword : normal function call be called with new keyword
//normal function can not be called with new key word

function Person(name){
    this.name=name
}
let nikita=new person("nikita")
let johnArrow =new personArrow("john")