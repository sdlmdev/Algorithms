// 145. Binary Tree Postorder Traversal
//
// Given the root of a binary tree, return the postorder traversal of its nodes' values.
//
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
//
// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
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
// The number of the nodes in the tree is in the range [0, 100].
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

var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const stack = [root];
  const res = [];

  while (stack.length) {
    const node = stack[stack.length - 1];

    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else {
      res.push(stack.pop().val);
    }
  }

  return res;
};

// const dfs = (root, res = []) => {
//   if (!root) {
//     return res;
//   }
//
//   dfs(root.left, res);
//   dfs(root.right, res);
//
//   res.push(root.val);
//
//   return res;
// };
//
// var postorderTraversal = function(root) {
//   return dfs(root);
// };
