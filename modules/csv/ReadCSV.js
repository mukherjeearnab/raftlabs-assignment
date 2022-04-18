const fs = require("fs");
const csv = require("csv-parser");

module.exports = (filename) => {
    const result = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            .pipe(csv({ separator: ";" }))
            .on("data", (data) => {
                result.push(data);
            })
            .on("end", () => {
                result.map((item) => {
                    if (item.authors) item.authors = item.authors.split(",");
                });

                resolve(result);
            });
    });
};
