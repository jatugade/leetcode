/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

//Time: O(logn) - 80ms
//Space: O(1) - 38.7mb
let findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (start <= end) {
        let middle = Math.ceil((start + end) / 2);

        if (nums[start] <= nums[middle]) {//can we do b-search on the left?
            if (min > nums[start]) {
                min = nums[start];
            }
            start = middle + 1;
        } else if (nums[middle] <= nums[end]) {//can we do b-search on the right?
            if (min > nums[middle]) {
                min = nums[middle];
            }
            end = middle -1;
        }
    }
    return min;
};
