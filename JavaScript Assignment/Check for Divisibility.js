/*Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use  a for loop and continue statement.*/

function printDivisibleByThree(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber % 2 === 0) {
            continue;
        }
        if (currentNumber % 3 === 0) {
            console.log(currentNumber);
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printDivisibleByThree(numbers);
