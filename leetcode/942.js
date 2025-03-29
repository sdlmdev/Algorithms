// 942. DI String Match
//
// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
//
// Example 1:
// Input: s = "IDID"
// Output: [0,4,1,3,2]
//
// Example 2:
// Input: s = "III"
// Output: [0,1,2,3]
//
// Example 3:
// Input: s = "DDI"
// Output: [3,2,0,1]
//
// Constraints:
//
// 1 <= s.length <= 10**5
// s[i] is either 'I' or 'D'.

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let i = 0;
  let d = s.length;
  const res = [];

  for (const char of s) {
    if (char === 'I') {
      res.push(i);
      i += 1;
    } else {
      res.push(d);
      d -= 1;
    }
  }

  if (s[s.length - 1] === 'I') {
    res.push(res[res.length - 1] + 1);
  } else {
    res.push(res[res.length - 1] - 1);
  }

  return res;
};
