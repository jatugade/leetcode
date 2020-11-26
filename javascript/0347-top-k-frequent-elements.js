/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Time: O(logn) - 88ms
//Space: O(n) - 41.8mb
var topKFrequent = function(nums, k) {
    let obj = nums.reduce((obj, curr) => {
        if (obj[curr] === undefined) {
            obj[curr] = 1;
        } else {
            obj[curr]++;
        }
        return obj;
    }, {});

    let values = Object.entries(obj).reduce((obj, current) => {
        obj.push({count: current[1], value: current[0]});
        return obj;
    }, []);

    values.sort((a,b) => b.count - a.count);
    return values.slice(0,k).map(v => v.value);
};

