// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:
// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:
// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

// Constraints:
// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

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

const dfs = (root: TreeNode | null, res) => {
  if (!root) {
    return res;
  }

  if (!root.left && !root.right) {
    res.push([root.val]);
  }

  dfs(root.left, res);
  dfs(root.right, res);

  return res;
};

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const r1 = dfs(root1, []).join();
  const r2 = dfs(root2, []).join();

  return r1 === r2;
};