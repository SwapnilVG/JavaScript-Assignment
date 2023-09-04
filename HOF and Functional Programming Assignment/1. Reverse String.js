/*The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay  of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.*/

let input = "Swapnil"

let reverseString = (input)=>{
    let split = input.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    return join;
}

let reverseStringAfterDelay = ()=>{
    setTimeout(function(){
       let  reverseStringS = reverseString(input);
        console.log(reverseStringS); 
    },2000);
}   
reverseStringAfterDelay();





