// 897. Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

// Example 1:
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// Example 2:
// Input: root = [5,1,7]
// Output: [1,null,5,null,7]

// Constraints:
// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

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

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const stack: TreeNode[] = [];
  let newRoot: TreeNode | null = null;
  let lastNode: TreeNode | null = null;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop() as TreeNode;

    if (!newRoot) {
      newRoot = root;
    } else {
      lastNode.right = root;
      root.left = null;
    }

    lastNode = root;
    root = root.right;
  }

  return newRoot;
}