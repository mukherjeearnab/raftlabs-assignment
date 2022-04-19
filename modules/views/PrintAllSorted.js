const _ = require("lodash");
const Table = require("../table");
const Helpers = require("../helpers");

module.exports = (data) => {
    let list = [...data.books, ...data.magazines];

    Helpers.JoinAuthors(list, data.authors);

    output = _.orderBy(list, ["title"], ["asc"]);
    Table(output, ["title", "isbn", "authorNames", "description", "publishedAt"]);
};
