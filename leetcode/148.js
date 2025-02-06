// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 104].
// -10**5 <= Node.val <= 10**5

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function(head) {
  const nums = [];
  let cur = head;

  while (cur) {
    nums.push(cur.val);
    cur = cur.next;
  }

  nums.sort((a, b) => a - b);

  cur = head;

  nums.forEach((num) => {
    cur.val = num;
    cur = cur.next;
  })

  return head;
};
