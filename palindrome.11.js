let str = 'ama';
function palindrome(str){
    if(str === str.split('').reverse().join('')){
        console.log("this word is palindrome!");
    }else{
        console.log('this word isnt palidrome!');
    }
}
palindrome(str);