// Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// Constraints:
// 1 <= nums.length <= 2 * 10**4
// -1000 <= nums[i] <= 1000
// -10**7 <= k <= 10**7

const subarraySum = (nums, k) => {
  let sum = 0;
  let res = 0;
  let preSum = {0: 1};

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (preSum[sum - k]) {
      res += preSum[sum - k];
    }
    preSum[sum] = (preSum[sum] || 0) + 1;
  }

  return res;
};
