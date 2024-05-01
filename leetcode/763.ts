// 763. Partition Labels

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]

// Constraints:
// 1 <= s.length <= 500
// s consists of lowercase English letters.

function partitionLabels(s: string): number[] {
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], i);
  }

  let l = 0;
  let r: number = map.get(s[0]);
  const res: number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    const curLength = map.get(s[i]);

    if (i > r) {
      l = i;
      r = curLength;
    }

    if (curLength > r) {
      r = curLength;
    }

    if (i === r) {
      res.push(r - l + 1);
    }
  }

  return res;
};
