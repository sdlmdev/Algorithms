// Q3. Find All Numbers Disappeared in an Array
//
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
//
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
//
// Example 2:
// Input: nums = [1,1]
// Output: [2]
//
// Constraints:
// n == nums.length
// 1 <= n <= 10**5
// 1 <= nums[i] <= n
//
// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = new Array(nums.length + 1).fill(0);

  res[0] = 1;
  nums.forEach(num => res[num] += 1);

  return res.reduce((acc, cur, i) => {
    if (cur === 0) acc.push(i);

    return acc;
  }, []);

  // const n = nums.length;
  // nums = new Set(nums);

  // const res = [];

  // for (let i = 1; i <= n; i += 1) {
  //     if (!nums.has(i)) res.push(i);
  // }

  // return res;
};
