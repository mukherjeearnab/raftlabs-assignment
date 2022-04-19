const _ = require("lodash");

module.exports = (docs, authors) => {
    authors.map((item) => {
        item.name = item.firstname + " " + item.lastname;
    });

    docs.map((item) => {
        item.authorNames = item.authors.map((item) => {
            return _.find(authors, { email: item }).name;
        });

        item.authorNames = item.authorNames.reduce((prev, curr) => prev + ", " + curr, "");
        item.authorNames = item.authorNames.slice(2);
    });
};
