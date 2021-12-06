const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function falsyValueFilter(arr){
    for(let i = 0 ; i< arr.length; i++){}
        let res = arr.filter(e=>!!e);
  return res;  
}
console.log(falsyValueFilter(values));