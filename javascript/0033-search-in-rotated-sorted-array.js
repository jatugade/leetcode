/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Time: O(logn) - 84ms
//SpaceL O(1) - 38.6mb
let search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] === target) {
            return start;
        } else if (nums[end] === target) {
            return end;
        } else if (nums[start] < nums[mid]) {
            if (nums[start] < target && target < nums[mid]) {
                start++;
                end = mid - 1;
            } else {
                start = mid + 1;
                end--;
            }
        } else if (nums[mid] < target && target < nums[end]) {
            start = mid + 1;
            end--;
        } else {
            start++;
            end = mid - 1;
        }
    }

    return -1;
}