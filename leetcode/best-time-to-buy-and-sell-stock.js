/**
 * @param {number[]} prices
 * @return {number}
 * ref: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 */
var maxProfit = function(prices) {
    let length = prices.length;
    let min = prices[0];
    let max = 0;
    
    for (let i = 0; i < length; ++i) {
        const current = prices[i];
        min = Math.min(current, min);
        max = Math.max(max, current - min);
    }
    
    return max;
};
