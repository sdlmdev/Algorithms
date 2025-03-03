// 222. Count Complete Tree Nodes
//
// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.
//
// Example 1:
// Input: root = [1,2,3,4,5,6]
// Output: 6
//
// Example 2:
// Input: root = []
// Output: 0
//
// Example 3:
// Input: root = [1]
// Output: 1
//
// Constraints:
// The number of nodes in the tree is in the range [0, 5 * 10**4].
// 0 <= Node.val <= 5 * 10**4
// The tree is guaranteed to be complete.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var countNodes = function(root) {
  if (!root) {
    return 0;
  }

  let res = 0;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    res += 1;

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return res;
};

// const dfs = (root, res = {cnt: 0}) => {
//   if (!root) {
//     return res.cnt;
//   }
//
//   res.cnt += 1;
//
//   dfs(root.left, res);
//   dfs(root.right, res);
//
//   return res.cnt;
// }
//
// var countNodes = function(root) {
//   return dfs(root);
// };
