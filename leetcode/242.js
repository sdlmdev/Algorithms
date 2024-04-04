// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 10**4
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const fillMap = (str) => {
  const mapStr = new Map();

  for (let i = 0; i < str.length; i += 1) {
    mapStr.set(str[i], (mapStr.get(str[i]) || 0) + 1)
  }

  return mapStr;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const mapS = fillMap(s);
  const mapT = fillMap(t);

  for (const [key, val] of mapS.entries()) {
    const tCnt = mapT.get(key);

    if (val !== tCnt) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "naga1ram")); 