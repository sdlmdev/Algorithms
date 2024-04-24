// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:
// 1 <= piles.length <= 10**4
// piles.length <= h <= 10**9
// 1 <= piles[i] <= 10**9

function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles)
  let res = r;

  const getK = (speed) => piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0);

  while(l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    const k = getK(m);

    if (k > h) {
      l = m + 1;
    } else {
      res = Math.min(res, k);
      r = m - 1;
    }
  }

  return res;
};