// 1289. Minimum Falling Path Sum II

// Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.

// A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.

// Example 1:
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
// Output: 13
// Explanation: 
// The possible falling paths are:
// [1,5,9], [1,5,7], [1,6,7], [1,6,8],
// [2,4,8], [2,4,9], [2,6,7], [2,6,8],
// [3,4,8], [3,4,9], [3,5,7], [3,5,9]
// The falling path with the smallest sum is [1,5,7], so the answer is 13.

// Example 2:
// Input: grid = [[7]]
// Output: 7

// Constraints:
// n == grid.length == grid[i].length
// 1 <= n <= 200
// -99 <= grid[i][j] <= 99

function minFallingPathSum(grid: number[][]): number {
  let firstMin = 0;
  let secondMin = 0;
  let firstMinIndex = 0;

  for (let i = 0; i < grid.length; i += 1) {
    let curFirstMin = Infinity;
    let curSecondMin = Infinity;
    let curFirstMinIndex = 0;

    for (let j = 0; j < grid.length; j += 1) {
      grid[i][j] += j === firstMinIndex ? secondMin : firstMin;

      if (grid[i][j] < curFirstMin) {
        curSecondMin = curFirstMin;
        curFirstMin = grid[i][j];
        curFirstMinIndex = j;
      } else if (grid[i][j] < curSecondMin) {
        curSecondMin = grid[i][j];
      }
    }

    firstMin = curFirstMin;
    secondMin = curSecondMin;
    firstMinIndex = curFirstMinIndex;
  }

  return firstMin;
};