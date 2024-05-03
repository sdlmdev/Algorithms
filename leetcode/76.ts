// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 10**5
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

function minWindow(s: string, t: string): string {
  const map = new Map();

  for (const char of t) {
    map.set(char, map.get(char) + 1 || 1);
  }

  let req = map.size;
  let l = 0;
  let r = 0;
  let start = 0;
  let end = 0;

  while (r < s.length) {
    let char = s[r];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);

      if (map.get(char) === 0) req -= 1;
    }

    r += 1;

    while (req === 0) {
      const tempChar = s[l];

      if (map.has(tempChar)) {
        map.set(tempChar, map.get(tempChar) + 1);

        if (map.get(tempChar) > 0) req += 1;
      }

      if (r - l < end - start || end === 0) {
        start = l;
        end = r;
      }

      l += 1;
    }
  }
  
  return s.slice(start, end);
}
