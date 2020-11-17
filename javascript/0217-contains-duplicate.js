/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Time: O(n)    96ms
//Space: O(n)   44.5mb
let containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
};


//Time: O(nlogn) - 80ms - JS sort > 10 elements O(nlogn), < 10 elements O(logn)
//Space: O(logn)  - 42.8mb
let containsDuplicate2 = function(nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) return true;
    }
    return false;
};