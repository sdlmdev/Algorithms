// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  let prefix: string[] = [];
  let i = 0;

  while (i < strs[0].length && strs[0][i] === strs[strs.length - 1][i]) {
    prefix.push(strs[0][i]);
    i += 1;
  }

  return prefix.join('');
};