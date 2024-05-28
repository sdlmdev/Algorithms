// 2485. Find the Pivot Integer

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Example 1:
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.

// Example 3:
// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

// Constraints:
// 1 <= n <= 1000

function pivotInteger(n: number): number {
  const res = Math.sqrt(n * (n + 1) / 2);

  if (res % 1 !== 0) {
    return -1;
  } else {
    return Math.floor(res);
  }
};

// function pivotInteger(n: number): number {
//   n = n + 1;

//   const nums: number[] = new Array(n).fill(0);

//   for (let i = 1; i < n; i += 1) {
//     nums[i] = nums[i - 1] + i;
//   }

//   for (let i = n - 1; i > 0; i -= 1) {
//     if (nums.at(-1) - nums[i - 1] === nums[i]) {
//       return i;
//     }
//   }

//   return -1;
// };
