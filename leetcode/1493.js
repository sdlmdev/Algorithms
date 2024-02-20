// Longest Subarray of 1's After Deleting One Element

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array.
// Return 0 if there is no such subarray.
 
// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4,
// [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 

// Constraints:
// 1 <= nums.length <= 10**5
// nums[i] is either 0 or 1.

const getSum = (numsArr, start, end, step) => {
  const sum = new Array(numsArr.length).fill(0);
  let cnt = 0;

  for (let i = start; i !== end; i += step) {
    if (numsArr[i] === 1) {
      cnt += 1;
    } else {
      cnt = 0;
    }

    sum[i] = cnt;
  }

  return sum;
};

const longestSubarray = function(nums) {
  const left = getSum(nums, 0, nums.length, 1);
  const right = getSum(nums, nums.length - 1, 0, -1);
  let res = 0;

  for (let i = 0; i < nums.length; i += 1) {
    res = Math.max(res, (left[i - 1] || 0) + (right[i + 1] || 0));
  }

  return res;
};
