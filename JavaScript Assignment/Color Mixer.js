/*Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color based on the following criteria:
lf color1 is "red" and color2 is "blue" or vice versa, print "purple".
If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green".
If any other combination of colors is input, the program should print "Invalid color com#ination".
*/

function mixColors() {
    let prompt = require("prompt-sync")();
    let color1 = prompt("Enter Color 1 :")
    let color2 = prompt("Enter Color 2 :")
    let result;
  
    switch (color1) {
      case 'red':
        switch (color2) {
          case 'blue':
            result = 'purple';
            break;
          case 'yellow':
            result = 'orange';
            break;
          default:
            result = 'Invalid color combination';
        }
        break;
      case 'blue':
        switch (color2) {
          case 'yellow':
            result = 'green';
            break;
          case 'red':
            result = 'purple';
            break;
          default:
            result = 'Invalid color combination';
        }
        break;
      case 'yellow':
        switch (color2) {
          case 'red':
            result = 'orange';
            break;
          case 'blue':
            result = 'green';
            break;
          default:
            result = 'Invalid color combination';
        }
        break;
      default:
        result = 'Invalid color combination';
    }
  
    console.log(result);
  }
mixColors()