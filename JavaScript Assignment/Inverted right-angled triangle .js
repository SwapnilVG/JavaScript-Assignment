/*Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks with i rows.*/



let prompt = require("prompt-sync")();

function invertedTrianglePattern(i) {
    for (let row = i; row >= 1; row--) {
        let pattern = '';
        for (let column = 1; column <= row; column++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}
let i = parseInt(prompt("Enter Number :"))
invertedTrianglePattern(i);
