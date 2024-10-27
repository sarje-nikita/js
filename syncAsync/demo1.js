const fs=require("fs")// fs model give a way to interact with files

//example1
//sync
console.log("start1")
let output=fs.readFileSync("syncAsync/data.txt","utf8")//utf8 is use decoding text files
console.log(output)
console.log("end1")

//Asyc//example1
console.log("start2")
fs.readFile("syncAsync/data.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("end2")

