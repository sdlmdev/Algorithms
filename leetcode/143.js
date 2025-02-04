// 143. Reorder List
//
// You are given the head of a singly linked-list. The list can be represented as:
//
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
//
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
//
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
//
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
//
// Constraints:
// The number of nodes in the list is in the range [1, 5 * 10**4].
// 1 <= Node.val <= 1000
//

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function(head) {
  let cur = head?.next;
  const stack = [head]

  while (cur) {
    stack.push(cur);

    cur = cur.next;
  }

  cur = head;
  let i = 0;

  while (stack.length) {
    if (i % 2 === 0) {
      cur.next = stack.shift();
    } else {
      cur.next = stack.pop();
    }

    i += 1;
    cur = cur.next;
  }

  cur.next = null;
};
