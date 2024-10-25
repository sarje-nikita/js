//block scope
if(true){
    let a=2
    var b=2
}    
//console.log(a)//we can to this operation because "let"is block scope

//console.log(b)//this is allowed because varible decalred with are fucational scope

//fuction scope

function fun(){
    let c=5
    var d=3

}
//console.log(c)
//console.log(d)
//both the above operation can not possible

//laxical scope (the varible delcared in the outer function are accissible for inner function)

function fun1(){
    let e=5

    function fun2(){
        console.log(e)

    }
    fun2()
    
}
fun1()
