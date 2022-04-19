const prompt = require("prompt-sync")({ sigint: true });

const CSV = require("./modules/csv");
const Views = require("./modules/views");

const main = async () => {
    // Store all 3 csv data into data object
    let data = {};
    data.authors = await CSV.ReadCSV("./data/authors.csv");
    data.books = await CSV.ReadCSV("./data/books.csv");
    data.magazines = await CSV.ReadCSV("./data/magazines.csv");

    // Print menu items
    console.log("Main Menu\n--------\n");
    console.log("1. Print out all books and magazines.");
    console.log("2. Find book or magazine by ISBN.");
    console.log("3. Find all books and magazines by authors email.");
    console.log("4. Print all books and magazines sorted by Title.");
    console.log("5. Add a new book or magazine to the list and save to a new .CSV file.");

    // Read user action
    const choice = prompt("Enter Choice: ");

    // Execute functionality based on user input
    if (choice === "1") Views.PrintAll(data);
    else if (choice === "2") Views.FindByISBN(data);
    else if (choice === "3") Views.FindByAuthor(data);
    else if (choice === "4") Views.PrintAllSorted(data);
    else if (choice === "5") Views.AddDocument(data);
    else console.log("Invalid choice. Exiting...");
};

main();
