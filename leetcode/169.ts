// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 10**4
// -10**9 <= nums[i] <= 10**9

// Follow-up: Could you solve the problem in linear time and in O(1) space?

function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let max = 1;
  let res = nums[0];
  let l = 0;
  let r = 0;

  while (l < nums.length) {
    let curMax = 0;

    while (r < nums.length && nums[l] === nums[r]) {
      r += 1;
      curMax += 1;
    }

    if (curMax > max) {
      max = curMax;
      res = nums[l];
    }

    l = r;
  }

  return res;
};