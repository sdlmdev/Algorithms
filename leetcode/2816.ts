// 2816. Double a Number Represented as a Linked List

// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

// Return the head of the linked list after doubling it.

// Example 1:
// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.

// Example 2:
// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.

// Constraints:

// The number of nodes in the list is in the range [1, 10**4]
// 0 <= Node.val <= 9
// The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.

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

function doubleIt(head: ListNode | null): ListNode | null {
  const firtstNum: number[] = [];

  while (head) {
    firtstNum.push(head.val);
    head = head.next;
  }

  const newFirstNum = String(BigInt(firtstNum.join("")) * 2n);
  const newHead = new ListNode(+newFirstNum[0]);

  if (newFirstNum.length > 1) {
    let curTail = new ListNode(+newFirstNum[1], null);
    newHead.next = curTail;

    for (let i = 2; i < newFirstNum.length; i += 1) {
      const newNode = new ListNode(+newFirstNum[i], null);
      curTail.next = newNode;
      curTail = newNode;
    }
  } else {
    newHead.next = null;
  }

  return newHead;
}
