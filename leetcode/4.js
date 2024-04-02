// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -10**6 <= nums1[i], nums2[i] <= 10**6

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const nums = [];
  const m = nums1.length;
  const n = nums2.length;
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i]);
      i += 1;
    } else {
      nums.push(nums2[j]);
      j += 1;
    }
  }
  
  while (i < m) {
    nums.push(nums1[i]);
    i += 1;
  }
  
  while (j < n) {
    nums.push(nums2[j]);
    j += 1;
  }

  const mid = Math.floor((m + n) / 2);

  if (nums.length % 2 !== 0) {
    return nums[mid];
  }

  return (nums[mid - 1] + nums[mid]) / 2;
};
