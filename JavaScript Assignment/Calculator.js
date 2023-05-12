/*Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement to perform the operation on the two numbers.
The calculator function should:
Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
Use a switch statement to determine which operation to perform based on the value of the operator.
If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical  operation and store the result in a variable called result.
If the operator is not one of the valid operators, log "Invalid operator" to the console.
*/

function calculator() {
    let prompt = require("prompt-sync")();
    let num1 =parseInt(prompt("Enter First number :"))
    let operator = prompt("Enter Operator :")
    let num2 = parseInt(prompt("Enter Second number :"))
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
  
    console.log(result);
  }
calculator()