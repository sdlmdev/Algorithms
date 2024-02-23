// Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 10**4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10**4

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      intervals[i] = [intervals[i - 1][0], Math.max(intervals[i - 1][1], intervals[i][1])];
      intervals[i - 1] = '';
    }
  }

  return intervals.filter(el => el !== '');
};

// const merge = (intervals) => {
//   intervals.sort((a, b) => a[0] - b[0]);

//   const result = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     const lastInterval = result[result.length - 1];

//     if (lastInterval[1] >= intervals[i][0]) {
//       lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
//     } else {
//       result.push(intervals[i]);
//     }
//   }

//   return result;
// };
