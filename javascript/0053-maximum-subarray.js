/**
 * @param {number[]} nums
 * @return {number}
 */
//Time: O(n) - 84ms
//Space: O(1) - 39mb
let maxSubArray = function(nums) {
    let max = nums[0];
    let sum = max;
    for (let i = 1; i < nums.length; i++) {
        sum = sum < 0 ? nums[i] : sum + nums[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};