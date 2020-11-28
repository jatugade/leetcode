/**
 * https://leetcode.com/problems/coin-change/submissions/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//Time: O(S * n) - 192ms
//Space: O(S) - 45.1mb
let coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    let res = helper(coins, amount, {});
    return res === Infinity ? -1 : res;
}

function helper(coins, remaining, minByRemaining) {
    if (minByRemaining[remaining] !== undefined) {
        return minByRemaining[remaining];
    }
    let counts = [];
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        let diff = remaining - coin;
        if (diff === 0) {
            counts[i] = 1;
        } else if (diff > 0) {
            let res = 1 + helper(coins, diff, minByRemaining);
            counts[i] = res;
        }
    }
    let min = counts.reduce((min, current) => {
        return current !== null && min > current ? current : min;
    }, Infinity);
    minByRemaining[remaining] = min;
    return min;
}
