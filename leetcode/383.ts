// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 10**5
// ransomNote and magazine consist of lowercase English letters.

const cntLetters = (str: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const letter of str) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  return map;
};

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map1 = cntLetters(ransomNote);
  const map2 = cntLetters(magazine);

  for (const [letter1, cnt1] of map1.entries()) {
    const cnt2 = map2.get(letter1);

    if (!cnt2 || cnt2 < cnt1) {
      return false;
    }
  }

  return true;
};