/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates 
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that 
contains only the unique elements.*/


let removeDuplicateValue =(Array)=>{
    return new Set(Array)
}
console.log(removeDuplicateValue([1,2,3,8,7,6,4,2,1,9,8,3]))