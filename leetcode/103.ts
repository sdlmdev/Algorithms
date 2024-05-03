// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Constraints:ч
// The number of nodes in the tree is in the range [0, 2000].
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const stack = [root];
  const res: number[][] = [];
  let deep = 1;

  while (stack.length) {
    let curStackLength = stack.length;
    const nodes: number[] = [];

    while (curStackLength) {
      const curNode = stack.shift();

      if (deep % 2 !== 0) {
        nodes.push(curNode.val);
      } else {
        nodes.unshift(curNode.val);
      }

      if (curNode.left) {
        stack.push(curNode.left);
      }
      if (curNode.right) {
        stack.push(curNode.right);
      }

      curStackLength -= 1;
    }

    res.push(nodes);
    deep += 1;
  }

  return res;
}
