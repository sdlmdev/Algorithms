// 2089. Find Target Indices After Sorting Array
// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Example 1:
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

// Example 2:
// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.

// Example 3:
// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i], target <= 100

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const lbs = (arr, tar) => {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (arr[m] === tar) {
      res = m;
      r = m - 1;
    } else if (arr[m] > tar) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return res;
};

const rbs = (arr, tar) => {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (arr[m] === tar) {
      res = m;
      l = m + 1;
    } else if (arr[m] > tar) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return res;
};

var targetIndices = function(nums, target) {
  nums.sort((a, b) => a - b);

  let l = lbs(nums, target);
  let r = rbs(nums, target);
  const res = [];

  while (l >=0 && r >=0 && l <= r) {
    res.push(l);
    l += 1;
  }

  return res;
};
