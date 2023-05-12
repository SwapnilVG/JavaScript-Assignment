/*Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.*/

let prompt = require("prompt-sync")();

let Enter_Password = prompt("Enter Password: ")
let Confirm_Password = prompt("Enter Confirm Password: ")

if (Enter_Password === Confirm_Password){
    console.log("Password Matched. Password validation Successful.")
}
else{
    console.log("Password didn't match. Password validation unsuccessful")
}