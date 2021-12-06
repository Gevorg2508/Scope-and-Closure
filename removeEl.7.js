let arr = ["kia", "tesla", "bmw", "mercedes"];
function filterByLength(arr){
    // for (let i = 0; i< arr.length ; i++){
        let res = arr.filter(elem=>elem.length>3);
    // }
    return res;
}
console.log(filterByLength(arr));