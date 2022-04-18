const _ = require("lodash");
const prompt = require("prompt-sync")({ sigint: true });
const Table = require("../table");

module.exports = (data) => {
    const Author = prompt("Enter Author email: ");

    let list = [...data.books, ...data.magazines];

    output = _.filter(list, (o) => {
        return o.authors.includes(Author);
    });

    if (output.length === 0) {
        console.error(`Document with Author email: ${Author} not found!`);
        return;
    }

    Table(output);
};
