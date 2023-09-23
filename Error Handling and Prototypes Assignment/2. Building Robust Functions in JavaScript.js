/* Create a function called getPerson that takes an object as a parameter representing a
person's name and age. The function should return the person's name and age as a string
in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid
object with the properties "name" and "age", the function should throw an error with
the message "Invalid parameter type". Use try-catch to handle this error and return
the error message if it occurs.*/


let  getPerson = (person)=>{
    try{
        if(typeof person !== "object" || !person.name || !person.age){
            throw new Error("Invalid Parameter Type");
        }
        return `Name: ${person.name}, Age: ${person.age}`
    }catch(error){
        return error.message
}
}



console.log(getPerson({name:"Mithun",age:20}))
console.log(getPerson({name:"Mithun"}))
console.log(getPerson(["name","Mithun"]))

