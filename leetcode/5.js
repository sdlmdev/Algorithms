// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"


// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */

const expandAroundCenter = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l -= 1;
    r += 1;
  }

  return r - l - 1;
};

const longestPalindrome = (s) => {
  if (s.length < 2) return s;

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const lenEvenPalindrome = expandAroundCenter(s, i, i);
    const lenOddPalindrome = expandAroundCenter(s, i, i + 1);
    const maxLen = Math.max(lenEvenPalindrome, lenOddPalindrome);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
};

