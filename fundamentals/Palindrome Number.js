// this question can be solved in two ways via recursion and via Math / Number Manipulation	✅ YES
// Simulation	✅ YES
// Loop Based Extraction	✅ YES

// optimised way is simulation
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;

  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

isPalindrome(121);

// below way is recursion.
function findPalindrome(int) {
  if (int < 0) return false;
  const str = int.toString();
  function check(left, right) {
    if (left >= right) return true;
    if (str[left] != str[right]) return false;
    return check(left + 1, right - 1);
  }

  return check(0, str.length - 1);
}

console.log(findPalindrome(10));
