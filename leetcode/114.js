// 114. Flatten Binary Tree to Linked List
//
// Given the root of a binary tree, flatten the tree into a "linked list":
//
// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
//
// Example 1:
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
//
// Example 2:
// Input: root = []
// Output: []
//
// Example 3:
// Input: root = [0]
// Output: [0]
//
// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
//
// Follow up: Can you flatten the tree in-place (with O(1) extra space)?

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  let head = null;

  const dfs = (root) => {
    if (!root)  {
      return;
    }

    if (root.right) {
      dfs(root.right);
    }

    if (root.left) {
      dfs(root.left);
    }

    root.left = null;
    root.right = head;
    head = root;
  };

  dfs(root);
};

// var flatten = function(root) {
//   let head = null;
//   let cur = root;
//
//   while (root !== head) {
//     if (cur.right === head) {
//       cur.right = null
//     };
//     if (cur.left === head) {
//       cur.left = null
//     };
//
//     if (cur.right) {
//       cur = cur.right;
//     } else if (cur.left) {
//       cur = cur.left;
//     } else {
//       cur.right = head;
//       head = cur;
//       cur = root;
//     }
//   }
// };
