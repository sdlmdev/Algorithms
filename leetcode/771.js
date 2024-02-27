// Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
*/

const numJewelsInStones = function (jewels, stones) {
  let jewelsSet = new Set(jewels);
  let cnt = 0;

  for (let stone of stones) {
    if (jewelsSet.has(stone)) {
      cnt += 1;
    }
  }

  return cnt;
};

// const numJewelsInStones = (jewels, stones) => {
//   const stonesMap = new Map();
//   let res = 0;

//   for (let i = 0; i < stones.length; i++) {
//     let cnt = stonesMap.get(stones[i]) || 0;
//     stonesMap.set(stones[i], cnt += 1);
//   }

//   for (let i = 0; i < jewels.length; i++) {
//     if (stonesMap.has(jewels[i])) res += stonesMap.get(jewels[i]);
//   }

//   return res;
// };
