// 144. Binary Tree Preorder Traversal
//
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
//
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
//
// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [1,2,4,5,6,7,3,8,9]
//
// Example 3:
// Input: root = []
// Output: []
//
// Example 4:
// Input: root = [1]
// Output: [1]
//
// Constraints:
// The number of nodes in the tree is in the range [0, 100]
// -100 <= Node.val <= 100
//
// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */

var preorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const res = [];

  while (stack.length) {
    const node = stack.pop();

    res.push(node.val);

    if (node?.right) {
      stack.push(node.right);
    }

    if (node?.left) {
      stack.push(node.left);
    }
  }

  return res;
};

// const dfs = (root, res = []) => {
//   if (!root) {
//     return res;
//   }
//
//   res.push(root.val);
//
//   dfs(root.left, res);
//   dfs(root.right, res);
//
//   return res;
// }
//
// var preorderTraversal = function(root) {
//   return dfs(root);
// };
