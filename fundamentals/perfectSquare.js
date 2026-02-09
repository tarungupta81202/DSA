// 279. Perfect Squares
// Approach
// We use dynamic programming to solve this problem.
// We create an array `dp` where `dp[i]` represents the least number of perfect square numbers that sum to `i`.
// We initialize `dp[0]` to 0 since zero can be represented by zero numbers.
// For each number from 1 to n, we check all perfect squares less than or equal to that number.
// We update `dp[i]` by taking the minimum of its current value and `dp[i - j*j] + 1`, where `j*j` is a perfect square.
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};

numSquares(13);
