/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(n) - 64ms
//Space: O(1) - 38.8mb
let maxProduct = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (max < 0) {
                max = 0;
            }
            product = 1;
        } else {
            product = product * nums[i];
            if (max < product) {
                max = product;
            }
        }

    }

    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            if (max < 0) {
                max = 0;
            }
            product = 1;
        } else {
            product = product * nums[i];
            if (max < product) {
                max = product;
            }
        }
    }

    return max;
}