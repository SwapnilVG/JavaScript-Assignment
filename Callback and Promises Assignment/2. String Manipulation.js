/*Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.*/


let manipulateString = (inputstr,callback)=>{
    let manipulateStr = inputstr.toUpperCase();
    callback(manipulateStr)
}

let logString = (manipulateStr) =>{
    console.log(`The manipulated string is: ${manipulateStr}`)
}

manipulateString("hello , World!",logString)
manipulateString("hello , swapnil",logString)