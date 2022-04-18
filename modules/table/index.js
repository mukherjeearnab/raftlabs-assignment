var Table = require("cli-table");

module.exports = (data) => {
    const output = data.map((item) => {
        if (item.description) item.description = item.description.slice(0, 10) + "...";
        if (item.title) item.title = item.title.slice(0, 10) + "...";
        // if (item.description) item.description = item.description.slice(0, 10) + "...";

        return item;
    });
    console.table(output);
};
