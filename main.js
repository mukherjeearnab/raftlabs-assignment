const CSV = require("./modules/csv");

const main = async () => {
    const data = await CSV.ReadCSV("./data/authors.csv");
    console.table(data);

    CSV.WriteCSV("./data/temp.csv", data);
};

main();
