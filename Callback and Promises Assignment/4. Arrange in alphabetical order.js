/*Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.*/

let books = [
{
    title: 'The Great Gatsby',
    author:'F.Scott Fitzgerald',
    year: 1925,
},

{
    title:'To Kill a Mockingbird',
    author:'Harper Lee',
    year:1960,
},

{
    title:'Who are You?',
    author:'George Orwell',
    year:'1949',    
},

{
    title:'Pride And Prejudice',
    author:'Jane Austen',
    year:'1813',
},

]

let logTitles = (titles)=>{
    titles.sort();
    console.log(titles.join(", "));
}

let extractTitles = (books ,callback)=>{
    let titles = books.map((book)=>book.title)
    callback(titles)
}

extractTitles(books,logTitles)