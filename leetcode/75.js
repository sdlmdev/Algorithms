// 75. Sort Colors
//
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//
// You must solve this problem without using the library's sort function.
//
// Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
//
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
//
// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
//
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
  const cnt = {
    0: 0,
    1: 0,
    2: 0,
  };

  for (let i = 0; i < nums.length; i += 1) {
    cnt[nums[i]] += 1;
  }

  for (let i = 0, j = 0; i < 3; i += 1) {
    while (cnt[i] > 0) {
      nums[j] = i;
      j += 1;
      cnt[i] -= 1;
    }
  }
};

// const quickSort = (arr, l = 0, r = arr.length - 1) => {
//   if (l >= r) {
//     return arr;
//   }
//
//   const pivotIndex = sort(arr, l, r);
//
//   quickSort(arr, l, pivotIndex - 1);
//   quickSort(arr, pivotIndex + 1, r);
// };
//
// const sort = (arr, l, r) => {
//   const pivot = arr[r];
//   let i = l;
//
//   for (let j = l; j < r; j += 1) {
//     if (arr[j] < pivot) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       i += 1;
//     }
//   }
//
//   [arr[i], arr[r]] = [arr[r], arr[i]];
//
//   return i;
// };
//
// var sortColors = function(nums) {
//   quickSort(nums);
// };
