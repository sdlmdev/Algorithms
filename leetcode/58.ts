// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:
// 1 <= s.length <= 10**4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

function lengthOfLastWord(s: string): number {
  s = s.trim();
  let i = s.length - 1;
  let cnt = 0;

  while(i >= 0 && s[i] !== ' ') {
    cnt += 1;
    i -= 1;
  }

  return cnt
};

// function lengthOfLastWord(s: string): number {
//   const arr = s.trim().split(' ');

//   return arr[arr.length - 1].length;
// };

