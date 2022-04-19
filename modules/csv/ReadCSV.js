const fs = require("fs");
const csv = require("csv-parser");

// Read CSV method, reads csv and returns object array
module.exports = (filename) => {
    const result = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            // Set csv seperator (delimiter) as ;
            .pipe(csv({ separator: ";" }))
            .on("data", (data) => {
                result.push(data);
            })
            .on("end", () => {
                // seperate authors and store them into an array
                result.map((item) => {
                    if (item.authors) item.authors = item.authors.split(",");
                });

                resolve(result);
            });
    });
};
