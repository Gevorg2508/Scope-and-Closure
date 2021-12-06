let arr = ["arr",3,4];

function unique(item,index,array){
    return array.indexOf(item) === index;
}
if(arr.join('') === arr.filter(unique).join('')){
    console.log("unique");
}else{
    console.log("not unique");
}
