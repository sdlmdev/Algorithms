// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:
// 1 <= nums.length <= 10**5
// nums[i] is either 0 or 1.

function findMaxConsecutiveOnes(nums: number[]): number {
  let l = 0;
  let r = 0;
  let res = 0;

  while (l < nums.length) {
    while (nums[r] === nums[l] && r < nums.length) {
      if (nums[l] === 1) {
        res = Math.max(res, r - l + 1);
      }

      r += 1;
    }

    l = r;
  }

  return res;
}
