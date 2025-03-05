// 1448. Count Good Nodes in Binary Tree
//
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.
//
// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.
//
// Example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
//
// Example 3:
// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.
//
// Constraints:
// The number of nodes in the binary tree is in the range [1, 10^5].
// Each node's value is between [-10^4, 10^4].

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
 * @return {number}
 */

const dfs = (root, maxVal) => {
  if (!root) {
    return 0;
  }

  let res = 0;

  if (root.val >= maxVal) {
    res = 1;
    maxVal = root.val;
  }

  res += dfs(root.left, maxVal);
  res += dfs(root.right, maxVal);

  return res;
}

var goodNodes = function(root) {
  return dfs(root, root.val);
};

// var goodNodes = function(root) {
//   if (!root) {
//     return 0;
//   }
//
//   const stack = [[root, root.val]];
//   let res = 0;
//
//   while (stack.length) {
//     let [node, max] = stack.pop();
//     const { left, right, val } = node;
//
//     if (val >= max) {
//       res += 1;
//       max = val;
//     }
//
//     if (right) {
//       stack.push([node.right, max]);
//     }
//
//     if (left) {
//       stack.push([node.left, max]);
//     }
//
//
//   }
//
//   return res;
// };
