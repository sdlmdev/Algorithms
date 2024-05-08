// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:
// The number of nodes in both trees is in the range [0, 100].
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // return JSON.stringify(p) === JSON.stringify(q)

  const queue: TreeNode[][] = [[p, q]];

  while (queue.length) {
    const [p, q]: TreeNode[] = queue.shift()!;

    if (!p && !q) {
      return true;
    }

    if (!p || !q) {
      return false;
    }

    if (p.val !== q.val) {
      return false;
    }

    if (p.left || q.left) {
      queue.push([p.left, q.left]);
    }

    if (p.right || q.right) {
      queue.push([p.right, q.right]);
    }
  }

  return true;
}

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (!p && !q) {
//     return true;
//   } else if (!p || !q) {
//     return false;
//   } else {
//     return (
//       p.val === q.val &&
//       isSameTree(p.left, q.left) &&
//       isSameTree(p.right, q.right)
//     );
//   }
// };

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (!p && !q) {
//     return true;
//   }

//   const queue = [p, q];

//   while (queue.length) {
//     const node1: TreeNode = queue.shift()!;
//     const node2: TreeNode = queue.shift()!;

//     if (node1?.left && node2?.left) {
//       queue.push(node1.left);
//       queue.push(node2.left);
//     } else if ((node1?.left && !node2?.left) || (!node1?.left && node2?.left)) {
//       return false;
//     }

//     if (node1?.right && node2?.right) {
//       queue.push(node1.right);
//       queue.push(node2.right);
//     } else if ((node1?.right && !node2?.right) || (!node1?.right && node2?.right)) {
//       return false;
//     }

//     if (node1?.val !== node2?.val) {
//       return false;
//     }
//   }

//   return true;
// }
