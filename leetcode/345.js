// 345. Reverse Vowels of a String
//
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
//
// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
//
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
//
// Constraints:
//
// 1 <= s.length <= 3 * 10**5
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('');
  const vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']);
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !vowels.has(s[l])) {
      l += 1;
    }

    while (r > l && !vowels.has(s[r])) {
      r -= 1;
    }


    if (s[l] !== s[r]) {
      const curL = s[l];

      s[l] = s[r];
      s[r] = curL;
    }

    l += 1;
    r -= 1;
  }

  return s.join('');
};
