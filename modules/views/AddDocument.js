const prompt = require("prompt-sync")({ sigint: true });
const CSV = require("../csv");
var path = require("path");

module.exports = (data) => {
    // menu to choose file name for csv and choose type of document to add
    const filename = prompt("Enter new CSV file name: ");
    console.log("1: Book\n2: Magazine");
    const type = prompt("Type of Document you want to add: ");

    // start new document process based on user choice
    if (type === "1") addBook(data, filename);
    else if (type === "2") addMagazine(data, filename);
    else return;
};

// Add new Book method
const addBook = (data, filename) => {
    // Acquire book details
    const title = prompt("Enter Book Title: ");
    const isbn = prompt("Enter ISBN: ");
    const authors = prompt("Enter Authors (seperate by ,): ");
    const description = prompt("Enter Book Description: ");

    // Create new book object
    const book = {
        title,
        isbn,
        authors: authors.split(","),
        description,
    };

    // add book to the books array
    data.books.push(book);

    // create file path
    const filepath = path.join(process.cwd(), "data", filename + ".csv");

    // write to new csv file
    console.log(`Adding Book ${book.title} to ${filename}`);
    CSV.WriteCSV(filepath, data.books);
};

// Add new Magazine method
const addMagazine = (data, filename) => {
    // Acquire magazine details
    const title = prompt("Enter Magazine Title: ");
    const isbn = prompt("Enter ISBN: ");
    const authors = prompt("Enter Authors (seperate by ,): ");
    const publishedAt = prompt("Enter Magazine Publication Date: ");

    // Create new Magazine object
    const magazine = {
        title,
        isbn,
        authors: authors.split(","),
        publishedAt,
    };

    // add magazine to the magazines array
    data.magazines.push(magazine);

    // create file path
    const filepath = path.join(process.cwd(), "data", filename + ".csv");

    // write to new csv file
    console.log(`Adding Magazine ${magazine.title} to ${filename}`);
    CSV.WriteCSV(filepath, data.magazines);
};
