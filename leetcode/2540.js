// 2540. Minimum Common Value
//
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
//
// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
//
// Example 2:
// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
//
// Constraints:
// 1 <= nums1.length, nums2.length <= 10**5
// 1 <= nums1[i], nums2[j] <= 10**9
// Both nums1 and nums2 are sorted in non-decreasing order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var getCommon = function(nums1, nums2) {
  let l = 0, r = 0;

  while (l < nums1.length && r < nums2.length) {
    if (nums1[l] === nums2[r]) {
      return nums1[l];
    } else if (nums1[l] < nums2[r]) {
      l += 1;
    } else {
      r += 1;
    }
  }

  return -1;
}

// var getCommon = function(nums1, nums2) {
//     nums1 = nums1.reverse(), nums2 = nums2.reverse();

//     while (nums1.length && nums2.length) {
//         const curL = nums1[nums1.length - 1];
//         const curR = nums2[nums2.length - 1];

//         if (curL === curR) {
//             return nums1[nums1.length - 1];
//         }

//         if (curL < curR) {
//             nums1.pop();
//         } else {
//             nums2.pop();
//         }
//     }

//     return -1;
// };

// const bs = (arr, val) => {
//     let l = 0;
//     let r = arr.length - 1;

//     while (l <= r) {
//         const m = Math.floor((l + r) / 2);
//         const cur = arr[m];

//         if (cur === val) {
//             return val;
//         }

//         if (cur < val) {
//             l = m + 1;
//         } else {
//             r = m - 1;
//         }
//     }

//     return null;
// };

// var getCommon = function(nums1, nums2) {
//     const max = nums1[0] > nums2[0] ? nums1 : nums2;
//     const min = nums1[0] > nums2[0] ? nums2 : nums1;

//     for (let i = 0; i < max.length; i += 1) {
//         const cur = bs(min, max[i]);

//         if (cur) {
//             return cur;
//         }
//     }

//     return -1;
// };
