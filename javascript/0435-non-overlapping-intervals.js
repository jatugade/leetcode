/**
 * @param {number[][]} intervals
 * @return {number}
 */

//Time: O(n+logn) - 84ms
//Space: O(1) - 40.5mb
let eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => (a[0] - b[0]));
    let count = 0;
    let first = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (first[1] > intervals[i][0]) {
            count++;
            if (first[1] > intervals[i][1]) {
                first = intervals[i];
            }
        } else {
            first = intervals[i];
        }
    }
    return count;
};