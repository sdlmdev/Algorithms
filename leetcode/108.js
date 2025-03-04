// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
// binary search tree.

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
// 1 <= nums.length <= 10**4
// -10**4 <= nums[i] <= 10**4
// nums is sorted in a strictly increasing order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const dfs = (nums, l, r) => {
  if (l > r) {
    return null;
  }

  const m = Math.floor((l + r) / 2);
  const node = new TreeNode(nums[m]);

  node.left = dfs(nums, l, m - 1);
  node.right = dfs(nums, m + 1, r);

  return node;
};

var sortedArrayToBST = function(nums) {
  return dfs(nums, 0, nums.length - 1);
};
