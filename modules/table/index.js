const truncate = (str) => {
    if (str.length > 10) return str.slice(0, 10) + "...";

    return str;
};

module.exports = (data, cols) => {
    const output = data.map((item) => {
        // create a deep copy of the array
        const content = JSON.parse(JSON.stringify(item));

        // truncate long texts based on a set length (here we truncate description and title)
        if (content.description) content.description = truncate(content.description);
        if (content.title) content.title = truncate(content.title);

        return content;
    });

    // Print the Array as a table, using console.table, with the provided columns (header) list
    console.table(output, cols);
};
