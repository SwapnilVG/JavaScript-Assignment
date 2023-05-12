/*A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.*/

let prompt = require("prompt-sync")();

function calculateTotalBill(costPerDish, numPeopleSharing) {
    const totalBill = costPerDish * numPeopleSharing;
    const billPerPerson = totalBill / numPeopleSharing;
    const result = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
    return result;
  }

const costPerDish = parseInt(prompt("Enter Cost Per Dish :"))
const numPeopleSharing = parseInt(prompt("Enter Number of people sharing :"));
const totalBill = calculateTotalBill(costPerDish, numPeopleSharing);
console.log(`The total bill for the table is Rs. ${totalBill.totalBill}/-.`);
console.log(`Each person in the group should pay Rs. ${totalBill.billPerPerson}/-.`);

