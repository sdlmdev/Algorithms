// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 10**5
// s consists of only lowercase English letters.

function firstUniqChar(s: string): number {
  const map = new Map();

  for (let i = 0; i < s.length; i += 1) {
    const curEl = map.get(s[i]);

    if (curEl) {
      map.set(s[i], [curEl[0] + 1, curEl[1]]);
    } else {
      map.set(s[i], [1, i]);
    }
  }

  for (const [key, value] of Array.from(map.entries())) {
    const [cnt, index] = value;

    if (cnt === 1) {
      return index;
    }
  }

  return -1;
}
