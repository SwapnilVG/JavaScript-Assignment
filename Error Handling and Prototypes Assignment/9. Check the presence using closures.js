/*Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.*/

function numberChecker(number){
    return function(num){
        return number.includes(num);
    }
}

let arr = [1,2,3,4,5]
let checkNum = numberChecker(arr)

console.log(checkNum(2))
console.log(checkNum(6))