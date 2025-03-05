// 1657. Determine if Two Strings Are Close
//
// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
//
// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
//
// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
//
// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
//
// Constraints:
// 1 <= word1.length, word2.length <= 10**5
// word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

const cntLetters = (word) => {
  const dict = new Map();

  for (let i = 0; i < word.length; i += 1) {
    dict.set(word[i], (dict.get(word[i]) || 0) + 1);
  }

  return dict;
};

var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  word1 = cntLetters(word1);
  word2 = cntLetters(word2);

  for (const letter of word1.keys()) {
    if (!word2.has(letter)) {
      return false;
    }
  }

  word1 = Array.from(word1.values()).sort((a, b) => a - b);
  word2 = Array.from(word2.values()).sort((a, b) => a - b);

  for (let i = 0; i < word1.length; i += 1) {
    if (word1[i] !== word2[i]) {
      return false;
    }
  }

  return true;
};
