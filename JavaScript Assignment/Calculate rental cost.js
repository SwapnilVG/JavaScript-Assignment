/*A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They required a function that takes in the number of days rented and car type and returns the rental cost. The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are are
Economy = Rs. 4000 /- per day 
Midsize = Rs. 10,000 /- per day
Luxury = Rs. 20,000 /- per day.
*/

let prompt = require("prompt-sync")(); 

function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
    
    switch (carType) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 10000;
        break;
      case 'luxury':
        rentalCost = 20000;
        break;
      default:
        console.log('Invalid car type.');
        return;
    }
    
    const totalCost = rentalCost * numDays;
    return totalCost;
  }

const numDays = parseInt(prompt("Enter Number of Days :"))
const carType = prompt("Enter Car Type :")
const rentalCost = calculateRentalCost(numDays, carType);
console.log(`The total cost for a ${carType} car rental for ${numDays} days is Rs. ${rentalCost}/-.`);
  