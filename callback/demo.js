//example 1
//custome call back
function hello(name, funInp) {
    console.log(`hello ${name}`)//here varibale is reslove like string templet
    funInp()
}

hello("nikita", () => {
    console.log("this is the callback")
})

//example 2 setTimeout
setTimeout(()=>{
    console.log("this is an setTimeout")
},2000)


//example3
//foreach
let numbers = [2,3,4,5,6,8]
numbers.forEach((num)=>{
    console.log(num)//for each takes a callback that exixuts on each element of that array
})


//example4
//Map function
let number=[4,5,6,7,8,9]
let output=number.map((num)=>{ //takes a number and map it too anything
   return num*num
})
console.log(output)


//example5
//customem callback
function fun3(num1,num2,fun){
    fun(num1,num2)
}
fun3(2,3,(a,b)=>{
    console.log(a*b)
})


