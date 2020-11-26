/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

//Time: O(n) - 80ms
//Space: O(1) - 41.4mb
let maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    while (start < end) {
        let area = (end - start) * (Math.min(height[start], height[end]));
        max = max < area ? area : max;

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return max;
};

//Time: O(n^2) - 960ms
//Space: O(1) - 41.4mb
let maxArea2 = function(height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
                let area = (j - i) * (Math.min(height[j], height[i]));
                if (area > max) {
                    max = area;
                }
        }
    }
    return max;
};