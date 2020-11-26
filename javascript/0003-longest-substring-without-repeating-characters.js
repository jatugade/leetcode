/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */

//Time: O(n) - 268ms
//Space: O(1) - 45.8mb
let lengthOfLongestSubstring = function(s) {
    let start = 0;
    let obj = {};
    let max = 0;
    let localMax = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if(obj[c] >= 0) {//duplicate!
            localMax = (i - start);
            if (max < localMax) {
                max = localMax;
            }

            let index = obj[c];
            start = index + 1;

            obj = Object.keys(obj).reduce((obj, key) => {
                if (obj[key] <= index) {
                    delete obj[key];
                }
                return obj;
            }, obj);
            obj[c] = i;
            localMax = i - start + 1;

        } else {//not a duplicate
            localMax++;
            obj[c] = i;
        }
    }

    if (max < localMax) {
        max = localMax;
    }

    return max;
};