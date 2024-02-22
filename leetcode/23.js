// Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -10**4 <= lists[i][j] <= 10**4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 10**4.

const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const mid = Math.floor(lists.length / 2);
  const l1 = mergeKLists(lists.slice(0, mid));
  const l2 = mergeKLists(lists.slice(mid));

  return mergeTwoLists(l1, l2);
};