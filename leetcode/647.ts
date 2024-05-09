// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

function countSubstrings(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    res += countPalindromesAroundCenter(s, i, i);
    res += countPalindromesAroundCenter(s, i, i + 1);
  }

  return res;
}

function countPalindromesAroundCenter(s: string, l: number, r: number): number {
  let count = 0;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l -= 1;
    r += 1;
    count += 1;
  }

  return count;
}

// function countSubstrings(s: string): number {
//   const palindrome = Array.from({ length: s.length }, () =>
//     Array.from({ length: s.length }, () => false)
//   );
//   let res = 0;

//   for (let i = 0; i < s.length; i += 1) {
//     for (let j = 0; j <= i; j += 1) {
//       if (s[i] === s[j] && (i - j <= 1 || palindrome[j + 1][i - 1])) {
//         palindrome[j][i] = true;
//         res += 1;
//       }
//     }
//   }

//   return res;
// }

// function checkPalindrome(s: string, l: number, r: number) {
//   while (l < r) {
//     if (s[l] !== s[r]) {
//       return false;
//     }

//     l += 1;
//     r -= 1;
//   }

//   return true;
// }

// function countSubstrings(s: string): number {
//   let res = 0;

//   for (let i = 0; i < s.length; i += 1) {
//     for (let j = i; j < s.length; j += 1) {
//       if (checkPalindrome(s, i, j)) {
//         res += 1;
//       }
//     }
//   }

//   return res;
// }
