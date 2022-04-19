const _ = require("lodash");

module.exports = (docs, authors) => {
    // join the firstname and lastname of authors from the authors array
    authors.map((item) => {
        item.name = item.firstname + " " + item.lastname;
    });

    docs.map((item) => {
        // replace the authors emails with their complete names in the array
        item.authorNames = item.authors.map((item) => {
            return _.find(authors, { email: item }).name;
        });

        // convert authors array into a single string, seperated by ,
        item.authorNames = item.authorNames.reduce((prev, curr) => prev + ", " + curr, "");
        item.authorNames = item.authorNames.slice(2);
    });
};
