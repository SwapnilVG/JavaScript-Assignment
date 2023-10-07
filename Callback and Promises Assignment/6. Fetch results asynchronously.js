/*Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.*/

async function fetchData(){
    let reponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await reponse.json()
    console.log(json)
}
fetchData()