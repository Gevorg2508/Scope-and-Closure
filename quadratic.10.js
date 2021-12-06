let arr = [1,2,3,4,5,6,7,8];
let result = [];
function quadrate(arr){
    result = arr.map(e=>e**2);
    return result;
}
quadrate(arr);
function sum(arr){
    return console.log(arr.reduce((curr,akk)=>curr+akk,0));
}
sum(result);
