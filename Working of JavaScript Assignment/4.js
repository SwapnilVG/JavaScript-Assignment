/*04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.*/

{

    console.log(a)
    console.log(b)
    console.log(c)

    let a = 1
    var b = 2
    const c = 3
 
    console.log(a) //1
    console.log(b) //2
    console.log(c) //3

}



