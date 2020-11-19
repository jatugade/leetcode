/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */

//Time: O(n^2) - 132ms
//Space: O(n) - 48.8mb
let threeSum = function(nums) {
    let results = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i

    < nums.length - 2; i++) {
        if (nums[i] !== nums[i-1]) {
            let target = -nums[i];
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end) {
                let sum = nums[start] + nums[end];
                if (sum === target) {
                    results.push([nums[i], nums[start], nums[end]]);
                    end--;
                    start++;
                    while (start < end && nums[start] === nums[start-1]) {
                        start++;
                    }
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return results;
}

// //Time: O(n^3)
//Space: O(n)
let threeSum2 = function(nums) {
    let results = [];
    let s = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i+1; j < nums.length - 1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let res = [nums[i], nums[j], nums[k]];
                    let sorted = res.sort();
                    let str = sorted.join(',');
                    if(!s.has(str)) {
                        results.push([nums[i], nums[j], nums[k]]);
                        s.add(str);
                    }

                }
            }
        }
    }
    return results;
};