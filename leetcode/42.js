// Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 10**4
// 0 <= height[i] <= 10**5

const trap = (height) => {
  let left = 0;
  let rigth = height.length - 1;
  let maxLeftHeigth = height[left];
  let maxRigthHeigth = height[rigth];
  let waterCnt = 0;

  while (left < rigth) {
    if (maxRigthHeigth < maxLeftHeigth) {
      rigth -= 1;

      if (height[rigth] < maxRigthHeigth) {
        waterCnt += maxRigthHeigth - height[rigth];
      } else {
        maxRigthHeigth = height[rigth];
      }
    } else {
      left += 1;

      if (height[left] < maxLeftHeigth) {
        waterCnt += maxLeftHeigth - height[left];
      } else {
        maxLeftHeigth = height[left];
      }
    }
  }

  return waterCnt;
};
