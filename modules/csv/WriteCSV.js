const { parse } = require("json2csv");
const fs = require("fs");

module.exports = (filename, data) => {
    // convert authors array to a single string with emails seperated by a ,
    data.map((item) => {
        if (item.authors) {
            item.authors = item.authors.reduce((prev, curr) => prev + "," + curr, "");
            item.authors = item.authors.slice(1);
        }
    });

    // parse array of objects into a CSV string and write it to a file
    const csv = parse(data, { quote: "", delimiter: ";" });
    fs.writeFileSync(filename, csv);

    console.info("CSV written to file", filename);
};
