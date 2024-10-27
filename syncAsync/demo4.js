//sync
let numbers=[6,5,7,3,1,2,9]
numbers.sort()
console.log(numbers)

//Async
let numbers2=[6,5,7,3,1,2,9]
setTimeout(()=>{
    numbers2.sort()
    console.log(numbers2)
})