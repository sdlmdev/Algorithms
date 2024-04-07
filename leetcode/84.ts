// 84. Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

// Constraints:
// 1 <= heights.length <= 10**5
// 0 <= heights[i] <= 10**4

function largestRectangleArea(heights: number[]): number {
  heights = [0, ...heights, 0];
  const stack: number[] = [];
  let max = 0;

  for (let i = 0; i < heights.length; i += 1) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const j = stack.pop() as number;
      const height = heights[j];
      const width = i - (stack[stack.length - 1] || 0) - 1;
      max = Math.max(max, height * width);
    }
    stack.push(i);
  }

  return max;
}
