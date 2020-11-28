/**
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Time: O(n) - 88ms
//Space: O(1) - 38.6mb
let isSubsequence = function(s, t) {
    if (s === t) return true;
    let current = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[current] === t[i]) {
            current++;
        }
        if (current === s.length) return true;
    }

    return false;
};