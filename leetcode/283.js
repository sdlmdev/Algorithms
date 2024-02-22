// Move Zeroes

// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]
 
// Constraints:

// 1 <= nums.length <= 10**4
// -2**31 <= nums[i] <= 2**31 - 1

// Follow up: Could you minimize the total number of operations done?

const moveZeroes = (nums) => {
  for (let l = 0, r = 0; r < nums.length; r += 1) {
    if (nums[r] !== 0) {
      const temp = nums[r];

      nums[r] = nums[l];
      nums[l] = temp;
      l += 1;
    }
  }

  return nums;
};

// const moveZeroes = (nums) => {
//   for (let i = 0, j = 0; j < nums.length; i += 1, j += 1) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums[nums.length] = 0
//       i -= 1;
//     }
//   }

//   return nums;
// };
