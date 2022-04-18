const prompt = require("prompt-sync")({ sigint: true });
const CSV = require("../csv");
var path = require("path");

module.exports = (data) => {
    const filename = prompt("Enter new CSV file name: ");
    console.log("1: Book\n2: Magazine");
    const type = prompt("Type of Document you want to add: ");

    if (type === "1") addBook(data, filename);
    else if (type === "2") addMagazine(data, filename);
    else return;
};

const addBook = (data, filename) => {
    const title = prompt("Enter Book Title: ");
    const isbn = prompt("Enter ISBN: ");
    const authors = prompt("Enter Authors (seperate by ,): ");
    const description = prompt("Enter Book Description: ");

    const book = {
        title,
        isbn,
        authors: authors.split(","),
        description,
    };

    data.books.push(book);

    const filepath = path.join(process.cwd(), "data", filename + ".csv");

    console.log(`Adding Book ${book.title} to ${filename}`);
    CSV.WriteCSV(filepath, data.books);
};

const addMagazine = (data, filename) => {
    const title = prompt("Enter Magazine Title: ");
    const isbn = prompt("Enter ISBN: ");
    const authors = prompt("Enter Authors (seperate by ,): ");
    const publishedAt = prompt("Enter Magazine Publication Date: ");

    const magazine = {
        title,
        isbn,
        authors: authors.split(","),
        publishedAt,
    };

    data.magazines.push(magazine);

    const filepath = path.join(process.cwd(), "data", filename + ".csv");

    console.log(`Adding Magazine ${magazine.title} to ${filename}`);
    CSV.WriteCSV(filepath, data.magazines);
};
