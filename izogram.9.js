let str1 = "ananas";
function izogram(str){
if (str === str.split('').filter(function(item,index,array){return array.indexOf(item) === index}).join('')){
    console.log("this word is izogram!");
}else {
    console.log("this word isnt izogram!");
}
}
izogram(str1);
