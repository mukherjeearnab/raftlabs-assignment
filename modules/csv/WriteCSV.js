const { parse } = require("json2csv");
const fs = require("fs");

module.exports = (filename, data) => {
    data.map((item) => {
        if (item.authors) {
            item.authors = item.authors.reduce((prev, curr) => prev + "," + curr, "");
            item.authors = item.authors.slice(1);
        }
    });

    const csv = parse(data, { quote: "", delimiter: ";" });
    fs.writeFileSync(filename, csv);

    console.info("CSV written to file", filename);
};
