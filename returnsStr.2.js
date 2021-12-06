function str(str){
    return function(){
        return str.toString();
    }
}
const f1 = str("hello");
console.log(f1());