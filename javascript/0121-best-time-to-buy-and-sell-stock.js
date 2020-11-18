/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

//Time: O(n)    76ms
//Space: O(1)   39.2mb
let maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minPrice;
        if (maxProfit < profit) {
            maxProfit = profit;
        } else if (profit < 0) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
}