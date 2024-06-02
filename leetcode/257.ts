// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Example 2:
// Input: root = [1]
// Output: ["1"]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

function binaryTreePaths(
  root: TreeNode | null,
  path: number[] = [],
  res: string[] = []
): string[] | void {
  if (!root) return;

  path.push(root.val);

  if (!root.left && !root.right) {
    res.push(path.join("->"));
  }

  binaryTreePaths(root.left, path, res);
  binaryTreePaths(root.right, path, res);

  path.pop();

  return res;
}
