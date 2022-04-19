// method to convert position (x, y) to string
const pos2str = (x, y) => {
    return `${x},${y}`;
};

// method to validate a position (x, y)
const validPos = (x, y) => {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
};

const res = [];

const solution = (row, col) => {
    // Check if Position is valid or not
    if (!validPos(row, col)) return;

    // Check if Cell / Position is already visited
    if (res.includes(pos2str(row, col))) return;

    // Add Current position to visited positions
    res.push(pos2str(row, col));

    // Backtrack and find all the possible positions to visit
    // move ffl (forward forward left)
    solution(row + 2, col - 1);

    // move ffr (forward forward right)
    solution(row + 2, col + 1);

    // move rrf (right right forward)
    solution(row + 1, col + 2);

    // move rrb (right right backward)
    solution(row - 1, col + 2);

    // move bbl (backward backward left)
    solution(row - 2, col - 1);

    // move bbr (backward backward right)
    solution(row - 2, col + 1);

    // move llf (left left forward)
    solution(row + 1, col - 2);

    // move llb (left left backward)
    solution(row - 1, col - 2);
};

// export the wrapper function
module.exports = (row, col) => {
    solution(row, col);
    return res;
};
