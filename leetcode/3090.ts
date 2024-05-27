// 3090. Maximum Length Substring With Two Occurrences

// Given a string s, return the maximum length of a 
// substring
//  such that it contains at most two occurrences of each character.

// Example 1:
// Input: s = "bcbbbcba"
// Output: 4
// Explanation:
// The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

// Example 2:
// Input: s = "aaaa"
// Output: 2
// Explanation:
// The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".

// Constraints:

// 2 <= s.length <= 100
// s consists only of lowercase English letters.

function maximumLengthSubstring(s: string): number {
  const map: Map<string, number> = new Map();
  let res = 2;

  for (let i = 0; i < 2; i += 1) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let l = 0;

  for (let r = 2; r < s.length; r += 1) {
    map.set(s[r], (map.get(s[r]) || 0) + 1);

    if (map.get(s[r])! >= 3) {
      while (map.get(s[r])! >= 3) {
        map.set(s[l], map.get(s[l])! - 1);
        l += 1;
      }
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};
