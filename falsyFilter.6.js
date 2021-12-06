const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function falsyValueFilter(arr){
    let result = [];
    for (let i = 0; i<arr.length ;i++){
        if(!!arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(falsyValueFilter(values));