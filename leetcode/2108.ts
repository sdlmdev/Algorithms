// 2108. Find First Palindromic String in the Array

// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

function firstPalindrome(words: string[]): string {
  for (const word of words) {
    const length = word.length;
    const isEven = length % 2 === 0;
    const m = Math.floor(length / 2);
    let l = isEven ? m - 1 : m;
    let r = m;

    while (l >= 0 && r < length) {
      if (word[l] === word[r]) {
        if (l === 0 && r === length - 1) {
          break;
        }

        l -= 1;
        r += 1;
      } else {
        break;
      }
    }

    if (l === 0 && r === length - 1 && word[l] === word[r]) {
      return word;
    }
  }

  return "";
}
