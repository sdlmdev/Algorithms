// 2130. Maximum Twin Sum of a Linked List
//
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.
//
// Example 1:
// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6.
//
// Example 2:
// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7.
//
// Example 3:
// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.
//
// Constraints:
// The number of nodes in the list is an even integer in the range [2, 10**5].
// 1 <= Node.val <= 10**5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var pairSum = function(head) {
  let l = head;
  let r = head.next;
  const nums = [];

  while (r) {
    nums.push(l.val);
    r = r?.next?.next;
    l = l.next;
  }

  let res = 0;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    res = Math.max(nums[i] + l.val, res);
    l = l.next;
  }

  return res;
};

// var pairSum = function(head) {
//   let l = head;
//   let r = head.next;
//   let n = 1;
//
//   while (r.next) {
//     r.prev = l;
//     l = r;
//     r = r.next;
//     n += 1;
//   }
//
//   r.prev = l;
//   n += 1;
//   l = head;
//
//   let res = 0;
//
//   for (let i = 0; i < n / 2; i += 1) {
//     res = Math.max(l.val + r.val, res);
//     r = r.prev;
//     l = l.next;
//   }
//
//   return res;
// };

// var pairSum = function(head) {
//   const nums = [];
//   let res = 0;
//
//   while (head) {
//     nums.push(head.val);
//     head = head.next;
//   }
//
//   for (let i = 0; i < nums.length / 2; i += 1) {
//     res = Math.max(nums[i] + nums[nums.length - 1 - i], res);
//   }
//
//   return res;
// };
