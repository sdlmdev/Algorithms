// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:
// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

function longestPalindrome(s: string): number {
    const n = s.length;
    let items: (Map<string, number> | Array<string | number>[]) = new Map();
    let cnt = 0;

    for (let i = 0; i < n; i += 1) {
        items.set(s[i], (items.get(s[i]) || 0) + 1);

        if (items.get(s[i])! % 2 === 1) {
            cnt += 1;
        } else {
            cnt -= 1;
        }
    }

    if (cnt > 1) {
        return n - cnt + 1;
    }

    return n;
};

// function longestPalindrome(s: string): number {
//   let items: Map<string, number> | Array<string | number>[] = new Map();

//   for (let i = 0; i < s.length; i += 1) {
//     items.set(s[i], (items.get(s[i]) || 0) + 1);
//   }

//   items = Array.from(items.entries()).sort((a, b) => b[1] - a[1]);

//   let res: number = items[0][1] as number;

//   for (let i = 1; i < items.length; i += 1) {
//     const curEl = items[i][1] as number;

//     if (curEl % 2 === 0 || res % 2 === 0) {
//       res += curEl;
//     } else {
//       if (curEl - 1 > 0) {
//         res += curEl - 1;
//       }
//     }
//   }

//   return res;
// }
