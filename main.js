const prompt = require("prompt-sync")({ sigint: true });

const Solution = require("./solution.js");
const Visual = require("./visual.js");

const main = () => {
    // Get the curent position
    const pos = prompt("Enter Position of Knight (seperated by row, column): ");

    // Get the current position as x, y (integers)
    let [x, y] = pos.split(",").map((item) => parseInt(item.trim()));

    // Call the solution method to solve the problem
    const answer = Solution(x, y);
    console.log("The Knight can visit the following cells:");
    // console.log(answer);

    Visual(answer);
};

main();
