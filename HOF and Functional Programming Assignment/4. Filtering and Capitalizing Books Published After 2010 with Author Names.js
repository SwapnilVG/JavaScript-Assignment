/*Write a program that takes a list of books, including their authors and publication years as input. The program  should then filter out all books that were published before 2010 and create a new array with the remaining  books, but with their author names capitalized.*/

let books = [
    {
        title: "Book 1",
        author: "author 1",
        year: 2005,
    },
    {
        title: "Book 2",
        author: "author 2",
        year: 2015,
    },
    {
        title: "Book 3",
        author: "author 3",
        year: 2017,
    },
    {
        title: "Book 4",
        author: "author 4",
        year: 2008,
    },
];
let filterbooks = books.filter((books)=>books.year>=2010).map(books=>({
    title:books.title,
    author:books.author.toUpperCase(),
    year:books.year
    }))
console.log(filterbooks)
