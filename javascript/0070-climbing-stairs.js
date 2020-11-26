/**
 * @param {number} n
 * @return {number}
 */
//Time: O(n) - 76ms
//Space: O(n) - 38.6mb
let climbStairs = function(n) {
    return helper(n);
};

function helper(n, arr = []) {
    if (arr[n] !== undefined) return arr[n];
    arr[n] = n <=3 ? n : helper(n-2, arr) + helper(n-1, arr);
    return arr[n];
}

//Time: O(n) - 76ms
//Space: O(n) - 38.1mb
let climbStairs2 = function(n) {
    let arr = [0,1,2];
    for (let i = arr.length; i <= n; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr[n];
}