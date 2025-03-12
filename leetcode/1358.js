// 1358. Number of Substrings Containing All Three Characters
//
// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.
//
// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
//
// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
//
// Example 3:
// Input: s = "abc"
// Output: 1
//
// Constraints:
// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const dict = {
    'a': 0,
    'b': 0,
    'c': 0,
  };

  let res = 0;

  for (let l = 0, r = 0; l < s.length; l += 1) {
    const cur = s[l];

    dict[cur] += 1;

    while (dict['a'] > 0 && dict['b'] > 0 && dict['c'] > 0) {
      res += s.length - l;
      dict[s[r]] -= 1;
      r += 1;
    }
  }

  return res;
};
