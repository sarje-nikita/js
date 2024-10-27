const fs = require("fs").promises// fs model give a way to interact with files

 async function getData(url) {//we write async here inside the function await is use
    
    let output = await fs.readFile(url, "utf8")//utf8 is use decoding text files
    console.log(output)//await stop the code excution unstil get promises get reslove
    return output
    

}
getData("syncAsync/data.txt")