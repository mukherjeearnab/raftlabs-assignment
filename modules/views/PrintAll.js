const _ = require("lodash");
const Table = require("../table");
const Helpers = require("../helpers");

module.exports = (data) => {
    let list = [...data.books, ...data.magazines];

    Helpers.JoinAuthors(list, data.authors);

    Table(list, ["title", "isbn", "authorNames", "description", "publishedAt"]);
};
