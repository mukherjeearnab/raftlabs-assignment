const _ = require("lodash");
const Table = require("../table");
const Helpers = require("../helpers");

module.exports = (data) => {
    // merge all books and magazines into a single array
    let list = [...data.books, ...data.magazines];

    // add the author names in the database rows
    Helpers.JoinAuthors(list, data.authors);

    // order the list by the title of the document (in ascending order)
    output = _.orderBy(list, ["title"], ["asc"]);

    // print as a table
    Table(output, ["title", "isbn", "authorNames", "description", "publishedAt"]);
};
