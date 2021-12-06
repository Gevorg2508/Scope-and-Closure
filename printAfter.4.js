let print = ()=>console.log(" mask");
function printArg(func){
    
    return console.log("hello world")+"\n"+func();
}
printArg(print);