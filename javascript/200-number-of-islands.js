/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */

//Time: O(n*m) - 84ms
//Space: O(1) - 39.8mb
let numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                markAdjacent(grid, i, j);
            }
        }
    }
    return count;

};

let markAdjacent = function(grid, i, j) {
    if (grid[i] && grid[i][j] === '1') {
        if (grid[i][j] === '1') {
            grid[i][j] = '0';
        }

        markAdjacent(grid, i - 1, j);
        markAdjacent(grid, i + 1, j);
        markAdjacent(grid, i, j + 1);
        markAdjacent(grid, i, j - 1);
    }
}