// Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 10**4
// s1 and s2 consist of lowercase English letters.

const arraysAreEqual = (a, b) => {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const lettersS1 = new Array(26).fill(0);
  const lettersS2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i += 1) {
    lettersS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    lettersS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
  }

  for (let i = s1.length; i < s2.length; i += 1) {
    if (arraysAreEqual(lettersS1, lettersS2)) return true;

    lettersS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    lettersS2[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)] -= 1;
  }

  return arraysAreEqual(lettersS1, lettersS2);
};