// Q1. Set Mismatch
//
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
//
// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
//
// Example 2:
// Input: nums = [1,1]
// Output: [1,2]
//
// Constraints:
// 2 <= nums.length <= 10**4
// 1 <= nums[i] <= 10**4

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const n = nums.length;
  const freq = new Array(n + 1).fill(0);
  let duplicate = 0;
  let missing = 0;

  for (const num of nums) {
    freq[num] += 1;
  }

  for (let i = 1; i <= n; i += 1) {
    if (freq[i] === 2) {
      duplicate = i;
    }

    if (freq[i] === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];

  // const dict = {};
  // let sum = 0;
  // let duplicate;

  // for (const num of nums) {
  //     dict[num] = (dict[num] || 0) + 1;

  //     if (dict[num] === 2) {
  //         duplicate = num;
  //     }

  //     sum += num;
  // }

  // const expectedSum = (nums.length * (nums.length + 1)) / 2;
  // const missing = expectedSum - (sum - duplicate);

  // return [duplicate, missing];
};
