// Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]


// Constraints:
// 1 <= n <= 8

const backtrack = (str, open, close, result, N) => {
  if (str.length === 2 * N) return result.push(str);
  if (open < N) backtrack(str + "(", open + 1, close, result, N);
  if (close < open) backtrack(str + ")", open, close + 1, result, N);
};

const generateParenthesis = (n) => {
  const res = [];
  backtrack("", 0, 0, res, n);
  return res;
};
