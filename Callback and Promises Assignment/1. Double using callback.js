/*Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.*/


let doubleArray = (arr,callback)=>{
    let doublearr = arr.map((num)=>{
        return callback(num)
    })
    return doublearr
}

let originalArray = [1,2,3,4,5]

let callback = (num) =>{
    return num * 2
}

let result = doubleArray(originalArray,callback)
console.log(result)