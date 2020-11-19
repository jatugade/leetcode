/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//Time: O(n) - 92ms
//Space: O(1) - 41mb
let merge = function(intervals) {
    let results = [];
    intervals.sort((a,b) => a[0] - b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (end >= intervals[i][0]) {
            if (end <= intervals[i][1]) {
                end = intervals[i][1];
            }
        } else {
            results.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }

    results.push([start, end]);
    return results;
};