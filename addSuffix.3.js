function addSuffix(str1){
    return function(str2){
        return str2.toString()+str1.toString(str2);
    }
}

addLy = addSuffix('ly');
console.log(addLy('hopeless'));
addLess = addSuffix('less');
console.log(addLess("hope"));
