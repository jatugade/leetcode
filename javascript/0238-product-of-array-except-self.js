/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */

//Time: O(n) - 120ms
//Space: O(1) - 50.1mb
let productExceptSelf = function(nums) {
    let results = [1];
    for (let i = 1; i < nums.length; i++) {
        results.push(results[i-1] * nums[i-1]);
    }

    let temp = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        temp = temp * nums[i+1];
        results[i] = results[i] * temp;
    }

    return results;
};



//Time: O(n) - 672ms
//Space: O(n) - 50.5mb
let productExceptSelf2 = function(nums) {
    let fromLeft = [1];
    for (let i = 1; i < nums.length; i++) {
        fromLeft.push(fromLeft[i-1] * nums[i-1]);
    }

    let fromRight = [1];
    for(let i = nums.length - 1; i > 0; i--) {
        fromRight.unshift(nums[i] * fromRight[0]);
    }

    let results = [];
    for (let i = 0; i < nums.length; i++) {
        results[i] = fromLeft[i] * fromRight[i];
    }

    return results;
};

//Time: O(n^2) - 7600ms
//Space: O(n) - 49.9mb
let productExceptSelf3 = function(nums) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product = product * nums[j];
            }
        }
        results[i] = product;
    }
    return results;
};