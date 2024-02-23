// Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

const isSymmetric = (root) => {
  const queue = [root, root];

  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();

    if (!t1 && !t2) continue;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;

    queue.push(t1.left, t2.right);
    queue.push(t1.right, t2.left);
  }

  return true;
};

// const isSymmetric = (root) => {
//   return isMirror(root.left, root.right);
// };

// const isMirror = (left, right) => {
//   if (!left && !right) return true;
//   if (!left || !right) return false;
//   if (left.val !== right.val) return false;

//   return isMirror(left.left, right.right) && isMirror(left.right, right.left);
// };