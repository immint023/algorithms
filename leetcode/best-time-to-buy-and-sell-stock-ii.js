/**
 * @param {number[]} prices
 * @return {number}
 */
 function buy(start, prices) {
  const pricesLength = prices.length;
  for (let i = start; i < pricesLength - 1; i++) {
      if (prices[i] < prices[i+1]) {
          return {
              boughtStock: prices[i],
              buyIndex: i,
          };
      }
  }
}

function sell(start, prices) {
  const pricesLength = prices.length;

  for (let i = start; i < pricesLength - 1; i++) {
      if (prices[i] > prices[i+1]) {
          return {
              soldStock: prices[i],
              soldIndex: i,
          };
      }
  }

  return {
      soldStock: prices[pricesLength - 1],
      soldIndex: pricesLength - 1,
  }
}


var maxProfit = function(prices) {
  const pricesLength = prices.length;

  let i = 0;
  let maxProfit = 0;

  while (i < pricesLength) {
      // buy stock
      const buyResult = buy(i, prices);
      if (!buyResult) {
          return maxProfit;
      };
      const boughtStock = buyResult.boughtStock
      i = buyResult.buyIndex + 1;

      // sell stock
      const sellResult = sell(i, prices);
      const soldStock = sellResult.soldStock;
      i = sellResult.soldIndex + 1;

      if (boughtStock !== null && soldStock !== null) {
          maxProfit += (soldStock - boughtStock);
      }
  }

  return maxProfit;
};