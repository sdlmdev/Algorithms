// 1456. Maximum Number of Vowels in a Substring of Given Length
//
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
//
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
//
// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
//
// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
//
// Constraints:
// 1 <= s.length <= 10**5
// s consists of lowercase English letters.
// 1 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const dict = new Set(['a', 'e', 'i', 'o', 'u']);
  let res = 0;
  let cur = 0;

  for (let i = 0; i < k; i += 1) {
    const letter = s[i];

    if (dict.has(letter)) {
      res += 1;
      cur += 1;
    }
  }

  for (let i = 0, j = k; j < s.length; i += 1, j += 1) {
    const letterI = s[i];
    const letterJ = s[j];

    if (dict.has(letterI)) {
      cur -= 1;
    }

    if (dict.has(letterJ)) {
      cur += 1;
      res = Math.max(res, cur);
    }
  }

  return res;
};
