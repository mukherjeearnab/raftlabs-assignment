const _ = require("lodash");
const Table = require("../table");

module.exports = (data) => {
    let list = [...data.books, ...data.magazines];

    Table(list, ["title", "isbn", "authors", "description"]);
};
