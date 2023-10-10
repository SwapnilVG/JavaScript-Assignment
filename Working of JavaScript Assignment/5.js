/*05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone.*/

{
    console.log(name) // Cannot access 'name' before initialization
    let name = "Swapnil"
    console.log(name) // Swapnil

}


