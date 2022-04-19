const _ = require("lodash");
const prompt = require("prompt-sync")({ sigint: true });
const Table = require("../table");

module.exports = (data) => {
    // Acquire author email from user
    const Author = prompt("Enter Author email: ");

    let list = [...data.books, ...data.magazines];

    // find all documents by that author
    output = _.filter(list, (o) => {
        return o.authors.includes(Author);
    });

    // if docs found are 0, return
    if (output.length === 0) {
        console.error(`Document with Author email: ${Author} not found!`);
        return;
    }

    // print the query output as a table
    Table(output);
};
