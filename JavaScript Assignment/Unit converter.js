/*A local weather station needs to convert data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station to provide temperature readings that are easily understandable to a wider audience*/

let prompt = require("prompt-sync")();

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }

const celsius = parseInt(prompt("Enter Celsius :"))
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`);
