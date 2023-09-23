/*Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.*/


class Person{
    constructor(name="Unknown",age = 0){
        this.name = name
        this.age = age
    }

    getDetails(){
        return `Name: ${this.name}, Age:${this.age}`
    }
}

let Person1 = new Person("Mithun",20)
console.log(Person1.getDetails())

let Person2 = new Person()
console.log(Person2.getDetails())

let Person3 = new Person("Swapnil",23)
console.log(Person3.getDetails())