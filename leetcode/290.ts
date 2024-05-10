// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:
// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

const cntPos = (str: string | string[]): Map<string, number> => {
  const map = new Map<string, number>();

  for (let i = 0; i < str.length; i += 1) {
    map.set(str[i], (map.get(str[i]) || 0) + i);
  }

  return map;
};

function wordPattern(pattern: string, s: string): boolean {
  const map1: number[] = Array.from(cntPos(pattern).values());
  const map2: number[] = Array.from(cntPos(s.split(' ')).values());

  for (let i = 0; i < map1.length; i += 1) {
    if (map1[i] !== map2[i]) {
      return false;
    }
  }

  return true;
};