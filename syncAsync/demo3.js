//sync
console.log(1)
const start=Date.now()
while(Date.now()-start<2000){
    //this will wait for 2 seconde

}
console.log(2)
console.log(3)


//Async
console.log("Async")
console.log(1)
setTimeout(()=>{
    console.log(2)
},2000)
console.log(3)

