let arr = [23, 4, 5, 76, 87, 32, 3, 78];


let book = [
    {
        "bookID": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "publicationYear": 1960,
        "ISBN": "9780061120084"
    },
    {
        "bookID": 2,
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "publicationYear": 1949,
        "ISBN": "9780451524935"
    },
    {
        "bookID": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "publicationYear": 1925,
        "ISBN": "9780743273565"
    },
    {
        "bookID": 4,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publicationYear": 1937,
        "ISBN": "9780547928227"
    },
    {
        "bookID": 5,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "publicationYear": 1997,
        "ISBN": "9780590353427"
    }
]

let newArr = book.filter((item) => (item.publicationYear < 1950));
// filter method ek callback leta hai as a parameter aur us callback function main ek condition given hoti hain agar koi item us condition ko satisfied karta hai tab hi wo naye array main include hoga.
console.log(newArr);

