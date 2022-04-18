const _ = require("lodash");
const prompt = require("prompt-sync")({ sigint: true });
const Table = require("../table");

module.exports = (data) => {
    const ISBN = prompt("Enter ISBN: ");

    let list = [...data.books, ...data.magazines];

    output = _.filter(list, _.matches({ isbn: ISBN }));

    if (output.length === 0) {
        console.error(`Document with ISBN: ${ISBN} not found!`);
        return;
    }

    Table(output);
};
