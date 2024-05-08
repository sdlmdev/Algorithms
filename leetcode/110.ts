// 110. Balanced Binary Tree

// Given a binary tree, determine if it is 
// height-balanced
// .

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -10**4 <= Node.val <= 10**4

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

function isBalanced(root: TreeNode | null): boolean {
  let res = true;

  const dfs = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
  
    const left = dfs(root.left);
    const right = dfs(root.right);
  
    if (Math.abs(left - right) > 1) {
      res = false;
    }

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return res;
};