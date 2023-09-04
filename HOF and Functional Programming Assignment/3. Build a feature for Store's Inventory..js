/*Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.*/


const usdToInrExchangeRate = 80;
const itemsInUSD = {
    item1: 20,   
    item2: 25,
    item3: 30,    
};
const itemsInINR = Object.keys(itemsInUSD).map(item => ({
    [item]: itemsInUSD[item] * usdToInrExchangeRate
}));
const itemsWithPricesInINR = Object.assign({}, ...itemsInINR);
console.log(itemsWithPricesInINR);

