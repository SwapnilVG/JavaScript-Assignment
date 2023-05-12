/*A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.*/


const deposit = (customer, amount) => {
    customer.balance += amount;
    console.log(`Successfully deposited ${amount} into ${customer.name}'s account. New balance is ${customer.balance}.`);
  };
  
const withdraw = (customer, amount) => {
    if (amount <= customer.balance) {

      customer.balance -= amount;
      console.log(`Successfully withdrew ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`);
    } else {
      console.log(`Insufficient funds in ${customer.name}'s account.`);
    }
  };

const customer1 = {
    name: "Swapnil",
    balance: 1000
  };
  
deposit(customer1, 500);  
withdraw(customer1, 700);
  
  