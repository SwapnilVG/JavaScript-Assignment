/* Create a class called Car with three properties: company, model, and year. The class
should have a method called getDescription that returns a string in the format "This is 
a <year> <company> <model>". Instantiate an instance of the Car class and call the 
getDescription method.*/


class Car {
    constructor(company, model,year){
        this.company = company;
        this.model = model;
        this.year = year
    }
    getDescription(){
        return `This is ${this.year} ${this.company} ${this.model}` 
    }
}

let mycar1 = new Car("Skoda", "Rapid", 2022)
console.log(mycar1.getDescription())

let mycar2 = new Car("Mahendra", "Thar", 2023)
console.log(mycar2.getDescription())