// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 10**4
// -3 * 10**4 <= nums[i] <= 3 * 10**4
// Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums: number[]): number {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};

// function singleNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i += 2) {
//     if (i < nums.length - 1 && nums[i + 1] !== nums[i]) return nums[i];
//   }

//   return nums[nums.length - 1];
// };