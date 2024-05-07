// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 10**4].
// -100 <= Node.val <= 100

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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const q: [TreeNode, number][] = [[root, 1]];
  let res = 0;

  while (q.length) {
    const [curNode, lvl] = q.shift() as [TreeNode, number];
    
    res = Math.max(res, lvl);

    if (curNode.left) {
      q.push([curNode.left, lvl + 1]);
    }

    if (curNode.right) {
      q.push([curNode.right, lvl + 1]);
    }
  }

  return res;
}

// const dfs = (root: TreeNode | null, res = 0): number => {
//   if (!root) {
//     return res;
//   }

//   res += 1;

//   const left = dfs(root.left, res);
//   const right = dfs(root.right, res);

//   return Math.max(left, right);
// };

// function maxDepth(root: TreeNode | null): number {
//   return dfs(root);
// };