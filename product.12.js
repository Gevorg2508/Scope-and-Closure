let arr = [12,12,3,4];
let result = [];
function largestProduct(...arr){
arr = arr.sort((a,b)=>a-b);
for(let i = 0; i<arr.length; i++){
    if(arr[i] === Math.max(...arr) && arr[i-1] === Math.max(...arr)){
    result.push(arr[i],arr[i-1]);
    return console.log(result.reduce((curr,akk)=>curr+akk,0));
    }
}
}
largestProduct(...arr);
