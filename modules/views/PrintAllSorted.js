const _ = require("lodash");
const Table = require("../table");

module.exports = (data) => {
    let list = [...data.books, ...data.magazines];
    output = _.orderBy(list, ["title"], ["asc"]);
    Table(output);
};
