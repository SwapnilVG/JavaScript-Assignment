/*Write a function that takes an object representing a person as input, and extracts the name and street 
properties from a nested object using object destructuring. The function should return an object with these two 
properties. A sample object is given below*/

const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };

let  extractObjectValues = (object)=>{
    let {name,address:{street}}=object;
    return {name,street};

};
console.log(extractObjectValues(person));