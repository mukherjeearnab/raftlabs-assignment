const CSV = require("./modules/csv");
const Views = require("./modules/views");

const main = async () => {
    let data = {};
    data.authors = await CSV.ReadCSV("./data/authors.csv");
    data.books = await CSV.ReadCSV("./data/books.csv");
    data.magazines = await CSV.ReadCSV("./data/magazines.csv");

    Views.PrintAllSorted(data);
};

main();
