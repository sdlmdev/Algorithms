// 55. Jump Game
//
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
//
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
//
// Constraints:
// 1 <= nums.length <= 10**4
// 0 <= nums[i] <= 10**5

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i += 1) {
    if (max < i) {
      return false;
    }

    max = Math.max(i + nums[i], max);
  }

  return true;
};

// var canJump = function(nums) {
//   const res = Array(nums.length).fill(0);
//   res[0] = 1;
//
//   stop: for (let i = 0; i < nums.length - 1; i += 1) {
//     let num = nums[i];
//     let j = i;
//
//     if (res[i] === 0) {
//       return false;
//     }
//
//     while (num > 0) {
//       if (j > nums.length - 1) {
//         break stop;
//       }
//
//       j += 1;
//       num -= 1;
//       res[j] += 1;
//     }
//   }
//
//   return res[nums.length - 1] > 0;
// };
