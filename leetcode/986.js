// Interval List Intersections

// You are given two lists of closed intervals, firstList and secondList,
// where firstList[i] = [starti,endi] and secondList[j] = [startj, endj].
// Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or
// represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

 

// Example 1:
// Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// Example 2:
// Input: firstList = [[1,3],[5,9]], secondList = []
// Output: []

// Constraints:

// 0 <= firstList.length, secondList.length <= 1000
// firstList.length + secondList.length >= 1
// 0 <= starti < endi <= 10**9
// endi < starti+1
// 0 <= startj < endj <= 10**9 
// endj < startj+1

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
*/

const intervalIntersection = (firstList, secondList) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const [fS, fE] = firstList[i];
    const [sS, sE] = secondList[j];

    if (fE < sS) i += 1;
    else if (sE < fS) j += 1;
    else {
      res.push([Math.max(fS, sS), Math.min(fE, sE)]);

      if (fE < sE) i += 1;
      else j += 1;
    }
  }

  return res;
};