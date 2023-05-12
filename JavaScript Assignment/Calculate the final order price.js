/*A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.*/

const calculateTotalCost = cart => {
    let totalCost = 0;
    cart.forEach(item => {
      totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
  };
  
const cart = [
  { unitPrice: 20, quantity: 2 },
  { unitPrice: 55, quantity: 4 },
  { unitPrice: 20, quantity: 1 }
];

const totalCost = calculateTotalCost(cart);
console.log(totalCost);
