// Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s.
// You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 10**4
// s and p consist of lowercase English letters.

const arraysAreEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const findAnagrams = (s, p) => {
  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);
  let result = [];

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }

  if (arraysAreEqual(pCount, sCount)) {
    result.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    sCount[s.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i - p.length) - 97]--;

    if (arraysAreEqual(pCount, sCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

// const checkMapsAreEqual = (map1, map2) => {
//   if (map1.size !== map2.size) return false;

//   for (const [key, val] of map1) {
//     if (map2.get(key) !== val) return false;
//   }

//   return true;
// };

// const findAnagrams = (s, p) => {
//   const lettersS = new Map();
//   const lettersP = new Map();
//   const res = [];

//   for (let i = 0; i < p.length; i += 1) {
//     lettersS.set(s[i], (lettersS.get(s[i]) || 0) + 1);
//     lettersP.set(p[i], (lettersP.get(p[i]) || 0) + 1);
//   }

//   for (let i = p.length; i < s.length; i += 1) {
//     if (checkMapsAreEqual(lettersS, lettersP)) res.push(i - p.length);

//     lettersS.set(s[i], (lettersS.get(s[i]) || 0) + 1);
//     if (lettersS.get(s[i - p.length]) > 1) {
//       lettersS.set(s[i - p.length], lettersS.get(s[i - p.length]) - 1);
//     } else {
//       lettersS.delete(s[i - p.length]);
//     }
//   }

//   if (checkMapsAreEqual(lettersS, lettersP)) res.push(s.length - p.length);

//   return res;
// };
