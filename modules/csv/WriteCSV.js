const { parse } = require("json2csv");
const fs = require("fs");

module.exports = (filename, data) => {
    const csv = parse(data, { quote: "", delimiter: ";" });
    fs.writeFileSync(filename, csv);

    console.info("CSV written to file", filename);
};
