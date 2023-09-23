/*Write a function called convertToNumber that takes a string as an argument and returns
the equivalent number. If the string cannot be converted to a number, the function should
return the string "Invalid number". Use error handling in javascript to achieve this output.*/

let convertToNumber = (str)=>{
    try{
        let num = Number(str)
        if(Number.isNaN(num)){
            throw new Error("Invalid Number")
        }
        return num;
    }catch(error){
         return error.message
    }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));



