/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
//Time: O(n^2) - 140ms
//Space: O(n) - 42.1mb
let lengthOfLIS = function(nums) {
    let lengthArr = [];
    let globalMax = 1;
    for (let i = 0; i < nums.length; i++) {
        let localMax = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                localMax = Math.max(localMax, lengthArr[j])
            }
        }
        lengthArr[i] = localMax === 0 ? 1 : localMax + 1;
        if (lengthArr[i] > globalMax) {
            globalMax = lengthArr[i];
        }
    }
    return globalMax;
};