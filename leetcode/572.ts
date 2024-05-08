// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -10**4 <= root.val <= 10**4
// -10**4 <= subRoot.val <= 10**4

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (isSame(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSame(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;

  return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}

// function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
// return JSON.stringify(root).indexOf(JSON.stringify(subRoot)) !== -1
// return JSON.stringify(root).includes(JSON.stringify(subRoot));
// };
