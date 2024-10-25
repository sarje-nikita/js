//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Nikita",
    [mySym]:"myKey1"
    age:18,
    location:"jaipur",
    email:"nikitasarje2000@gmail.com"
     
}
console.log(jsUser["name"])
console.log(jsUser[mySym]) 
Object.freeze(jsUser)
jsUser.email="nikitasarje2000@gmail.com"
console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello js user",${this.name});
}
console.log(jsUser.greeting());