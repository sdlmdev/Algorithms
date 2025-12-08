// 1305. All Elements in Two Binary Search Trees
//
// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.
//
// Example 1:
// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]
//
// Example 2:
// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]
//
// Constraints:
// The number of nodes in each tree is in the range [0, 5000].
// -10**5 <= Node.val <= 10**5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

const dfs = (root, arr) => {
  if (!root) return;

  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
};

var getAllElements = function(root1, root2) {
  const arr1 = [];
  const arr2 = [];
  const res = [];

  dfs(root1, arr1);
  dfs(root2, arr2);

  let l = 0;
  let r = 0;

  while (l < arr1.length && r < arr2.length) {
    const val1 = arr1[l];
    const val2 = arr2[r];

    if (val1 < val2) {
      res.push(val1);
      l += 1;
    } else {
      res.push(val2);
      r += 1;
    }
  }

  while (l < arr1.length) {
    res.push(arr1[l]);
    l += 1;
  }

  while (r < arr2.length) {
    res.push(arr2[r]);
    r += 1;
  }

  return res;
};

