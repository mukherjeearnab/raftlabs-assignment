// method to convert string to position (x, y)
const str2pos = (str) => {
    return str.split(",").map((item) => parseInt(item.trim()));
};

const visual = (visits) => {
    // create board array
    board = Array.from(Array(8), () => new Array(8).fill(0));

    // populate the starting position
    const [row, col] = str2pos(visits[0]);
    board[row - 1][col - 1] = -1;

    // populate the rest of the visited positions
    for (let i = 1; i < visits.length; i++) {
        const [row, col] = str2pos(visits[i]);
        board[row - 1][col - 1] = 1;
    }

    // print the top column position header
    console.log("   1 2 3 4 5 6 7 8\n");

    // print the rest of the board
    for (let row = 0; row < 8; row++) {
        // initiate the line with the row position header
        let line = `${row + 1}  `;

        // prepare the rest of the line, marking the visited and unvisited positions
        for (let col = 0; col < 8; col++) {
            if (board[row][col])
                if (board[row][col] === -1)
                    // if the position is starting position, mark with 'O'
                    line += "O ";
                // else mark it with 'X'
                else line += "X ";
            // if the position is not visited, mark it with ' ' (space) to signify unvisited
            else line += "  ";
        }

        // print the line
        console.log(line);
    }

    console.log("\n\nLegend: O => Starting Position; X => Visited Positions");
};

module.exports = visual;
