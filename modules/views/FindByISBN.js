const _ = require("lodash");
const prompt = require("prompt-sync")({ sigint: true });
const Table = require("../table");

module.exports = (data) => {
    // Acquire the ISBN from the user
    const ISBN = prompt("Enter ISBN: ");

    let list = [...data.books, ...data.magazines];

    // find all documents with the given ISBN
    output = _.filter(list, _.matches({ isbn: ISBN }));

    // if no documents are found, return
    if (output.length === 0) {
        console.error(`Document with ISBN: ${ISBN} not found!`);
        return;
    }

    // print the result of the query
    Table(output);
};
