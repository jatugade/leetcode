/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Time: O(n) - 128ms
//Space: O(n) - 47.9mb
let twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (obj[nums[i]] === undefined) {
            obj[diff] = i;
        } else {
            return [obj[nums[i]], i];
        }
    }
    return [];
}

//Time: O(n^2) - 4136ms
//Space: O(1) - 47.1mb
let twoSum2 = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}