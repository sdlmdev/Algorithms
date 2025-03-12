// 1089. Duplicate Zeros
//
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
//
// Example 1:
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
//
// Example 2:
// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
//
// Constraints:
// 1 <= arr.length <= 10**4
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i += 1) {
    const cur = arr[i];

    if (cur === 0) {
      res.push(0, 0);
    } else {
      res.push(cur);
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = res[i];
  }
};

// var duplicateZeros = function(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             arr.pop();
//             i += 1;
//         }
//     }
// };

// var duplicateZeros = function(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === 0) {
//             let prev = arr[i];

//             for (let j = i + 1; j < arr.length; j += 1) {
//                 const cur = arr[j];

//                 arr[j] = prev;
//                 prev = cur;
//             }

//             i += 1;
//         }
//     }
// };
