const truncate = (str) => {
    if (str.length > 10) return str.slice(0, 10) + "...";

    return str;
};

module.exports = (data) => {
    const output = data.map((item) => {
        const content = JSON.parse(JSON.stringify(item));

        if (content.description) content.description = truncate(content.description);
        if (content.title) content.title = truncate(content.title);
        // if (item.description) item.description = item.description.slice(0, 10) + "...";

        return content;
    });
    console.table(output);
};
