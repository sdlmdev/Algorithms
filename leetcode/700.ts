// 700. Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 10**7
// root is a binary search tree.
// 1 <= val <= 10**7

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root !== null) {
    if (val === root.val) return root;
    if (val <= root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  
  return null;
};

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (root === null) return null;
//   if (root.val === val) return root;
//   if (val < root.val) {
//     return searchBST(root.left, val);
//   } else {
//     return searchBST(root.right, val);
//   };
// };