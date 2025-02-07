// 349. Intersection of Two Arrays
//
// Given two integer arrays nums1 and nums2, return an array of their
// intersection. Each element in the result must be unique and you may return the result in any order.
//
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
//
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
//
// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  let maxArr = nums1.length >= nums2.length ? nums1 : nums2;
  const minArr = nums1.length < nums2.length ? nums1 : nums2;
  const res = new Set();

  maxArr = new Set(maxArr);

  for (let i = 0; i < minArr.length; i += 1) {
    if (maxArr.has(minArr[i])) {
      res.add(minArr[i]);
    }
  }

  return [...res];
};

// const bs = (arr, tar) => {
//   let l = 0;
//   let r = arr.length - 1;
//
//   while (l <= r) {
//     const m = Math.floor((l + r) / 2);
//
//     if (arr[m] === tar) {
//       return arr[m]
//     } else if (arr[m] < tar) {
//       l = m + 1;
//     } else {
//       r = m - 1;
//     }
//   }
// };
//
// var intersection = function(nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);
//
//   const maxArr = nums1.length >= nums2.length ? nums1 : nums2;
//   const minArr = nums1.length < nums2.length ? nums1 : nums2;
//
//   const res = new Set();
//
//   for (let i = 0; i < minArr.length; i += 1) {
//     const num = bs(maxArr, minArr[i]);
//
//     if ((num || num === 0) && !res.has(num)) {
//       res.add(num);
//     }
//   }
//
//   return [...res];
// };
