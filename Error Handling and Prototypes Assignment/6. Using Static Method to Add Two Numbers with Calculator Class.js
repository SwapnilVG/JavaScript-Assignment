/*Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.*/

class Calculator{
    static add(n1,n2){
        return n1+n2
    }
}

let result1 = Calculator.add(5,10)
console.log(result1)

let result2 = Calculator.add(13,7)
console.log(result2)