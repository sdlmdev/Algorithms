// 938. Range Sum of BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

// Constraints:
// The number of nodes in the tree is in the range [1, 2 * 10**4].
// 1 <= Node.val <= 10**5
// 1 <= low <= high <= 10**5
// All Node.val are unique.

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) return 0;
  let sum = 0;
  const curVal = root.val;
  if (curVal >= low && curVal <= high) sum += curVal;

  sum += rangeSumBST(root.left, low, high);
  sum += rangeSumBST(root.right, low, high);

  return sum;
};

// function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
//   let sum = 0;
//   const stack = [root];

//   while (stack.length > 0) {
//     const node = stack.pop();
//     if (node.val >= low && node.val <= high) sum += node.val;
//     if (node.left !== null) stack.push(node.left);
//     if (node.right !== null) stack.push(node.right);
//   }

//   return sum;
// };