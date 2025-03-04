// 1290. Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// Example 2:
// Input: head = [0]
// Output: 0

// Constraints:
// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number | void {
  let res = '';

  while (head) {
    res += head.val;
    head = head.next;
  }

  return parseInt(res, 2);
};

// function getDecimalValue(head: ListNode | null): number | void {
//   let res = '';

//   function dfs(head: ListNode | null): void {
//     if (!head) return;
  
//     res += head.val;
//     head = head.next;
  
//     dfs(head);
//   }

//   dfs(head);

//   return parseInt(res, 2);
// };

// function getDecimalValue(head: ListNode | null, res: string[] = []): number | void {
//   if (!head) return;

//   res.push(head.val);
//   head = head.next;

//   getDecimalValue(head, res);

//   return parseInt(res.join(''), 2);
// };