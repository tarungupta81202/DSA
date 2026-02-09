// 1. Two Sum
// Approach
// First we need to store the number as we have seen it, along with its index.
// For each number, we calculate its complement (target - current number).
// We check if the complement exists in our stored numbers.
// If it does, we return the indices of the current number and its complement.
// If not, we store the current number and its index for future reference.

var twoSum = function (nums, target) {
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    if (result.has(complement)) {
      return [result.get(complement), i];
    } else {
      result.set(current, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
