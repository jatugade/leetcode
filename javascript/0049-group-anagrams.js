/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */

//Time: O(nlogn) - 152ms
//Space: O(n) - 51.8mb
let groupAnagrams = function(strs) {
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort((a,b) => a.localeCompare(b)).join('');
        if (obj[sorted]) {
            obj[sorted].push(strs[i]);
        } else {
            obj[sorted] = [strs[i]];
        }
    }

    return Object.values(obj);
}

