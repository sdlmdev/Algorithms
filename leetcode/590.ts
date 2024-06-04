// 590. N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]

// Constraints:
// The number of nodes in the tree is in the range [0, 10**4].
// 0 <= Node.val <= 10**4
// The height of the n-ary tree is less than or equal to 1000.

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
  const res: number[] = [];
  const stack: (_Node | null)[] = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node !== null) {
      const { val, children } = node;

      res.push(val);
      stack.push(...children);
    }
  }

  return res.reverse();
}

// function postorder(root: _Node | null): number[] {
//   const res: number[] = [];

//   dfs(root, res);

//   return res;
// };

// function dfs(root: _Node | null, res: number[]): number[] | void {
//   if (!root) return;

//   for (const node of root.children) {
//     dfs(node, res);
//   }

//   res.push(root.val);
// };
