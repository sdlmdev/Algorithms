// 1876. Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".

// Example 2:
// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

// Constraints:
// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.

function countGoodSubstrings(s: string): number {
  const n = s.length;
  let res = 0;

  if (n < 3) return res;

  for (let i = 2; i < n; i += 1) {
    if (s[i] === s[i - 1] || s[i] === s[i - 2] || s[i - 1] === s[i - 2]) {
      continue;
    }

    res += 1;
  }

  return res;
}

// function countGoodSubstrings(s: string): number {
//   const n = s.length;
//   let res = 0;

//   for (let i = 0; i < n; i += 1) {
//     if (new Set(s.slice(i, i + 3)).size === 3) {
//       res += 1
//     }
//   }

//   return res;
// };

// function countGoodSubstrings(s: string): number {
//   const map = new Map();
//   const n = s.length;
//   const window = n <= 3 ? n : 3;
//   let res = 0;

//   for (let i = 0; i < window; i += 1) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//   }

//   if (checkString(map) && n >= 3) {
//     res += 1;
//   }

//   for (let i = window; i < n; i += 1) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//     map.set(s[i - window], map.get(s[i - window]) - 1);

//     if (checkString(map)) {
//       res += 1;
//     }
//   }

//   return res;
// };

// function checkString(strData: Map<string, number>): boolean {
//   for (const [key, val] of strData.entries()) {
//     if (val > 1) {
//       return false;
//     }
//   }

//   return true;
// }
