// 260. Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

// Constraints:
// 2 <= nums.length <= 3 * 10**4
// -2**31 <= nums[i] <= 2**31 - 1
// Each integer in nums will appear twice, only two integers will appear once.

function singleNumber(nums: number[]): number[] {
  nums.sort((a, b) => a - b);

  let num: number = nums[0];
  let cnt = 1;
  const res: number[] = [];

  for (let i = 1; i < nums.length; i += 1) {
    const curNum = nums[i];

    if (curNum === num) {
      cnt += 1;
    } else if (cnt >= 2) {
      num = curNum;
      cnt = 1;
    } else {
      res.push(num);

      num = curNum;
      cnt = 1;
    }
  }

  if (cnt === 1) {
    res.push(num);
  }

  return res;
};