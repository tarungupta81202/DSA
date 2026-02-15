var maxProfit = function (prices) {
  let minPriceSoFar = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPriceSoFar) {
      minPriceSoFar = prices[i];
    } else if (
      prices[i] - minPriceSoFar > 0 &&
      profit < prices[i] - minPriceSoFar
    ) {
      profit = prices[i] - minPriceSoFar;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4, 8]));
