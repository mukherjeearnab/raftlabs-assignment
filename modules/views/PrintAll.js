const _ = require("lodash");
const Table = require("../table");
const Helpers = require("../helpers");

module.exports = (data) => {
    // merge all books and magazines into a single array
    let list = [...data.books, ...data.magazines];

    // add the author names in the database rows
    Helpers.JoinAuthors(list, data.authors);

    // print as a table
    Table(list, ["title", "isbn", "authorNames", "description", "publishedAt"]);
};
