// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 10**5].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

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

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    const temp = slow.next;
    fast = fast.next.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  if (fast) {
    slow = slow.next;
  }
  
  while (slow && prev) {
    if (slow.val !== prev.val) {
      return false;
    }

    slow = slow.next;
    prev = prev.next;
  }

  return true;
};