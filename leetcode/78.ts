// 78. Subsets

// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  function getSets(path, curInd) {
    res.push(path);

    for (let i = curInd; i < nums.length; i += 1) {
      getSets([...path, nums[i]], i + 1);
    }
  }

  getSets([], 0);

  return res;
};