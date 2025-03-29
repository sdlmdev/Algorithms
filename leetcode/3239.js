// 3239. Minimum Number of Flips to Make Binary Grid Palindromic I
//
// You are given an m x n binary matrix grid.
// A row or column is considered palindromic if its values read the same forward and backward.
// You can flip any number of cells in grid from 0 to 1, or from 1 to 0.
// Return the minimum number of cells that need to be flipped to make either all rows palindromic or all columns palindromic.
//
// Example 1:
// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
// Output: 2
// Explanation:
// Flipping the highlighted cells makes all the rows palindromic.
//
// Example 2:
// Input: grid = [[0,1],[0,1],[0,0]]
// Output: 1
// Explanation:
// Flipping the highlighted cell makes all the columns palindromic.
//
// Example 3:
// Input: grid = [[1],[0]]
// Output: 0
// Explanation:
// All rows are already palindromic.
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m * n <= 2 * 10**5
// 0 <= grid[i][j] <= 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let line = 0;
  let col = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m / 2; j += 1) {
      const lLine = grid[i][j];
      const rLine = grid[i][m - 1 - j];

      if (lLine !== rLine) {
        line += 1;
      }
    }
  }

  for (let j = 0; j < m; j += 1) {
    for (let i = 0; i < n / 2; i += 1) {
      const lCol = grid[i][j];
      const rCol = grid[n - 1 - i][j];

      if (lCol !== rCol) {
        col += 1;
      }
    }
  }

  return Math.min(line, col);
};
