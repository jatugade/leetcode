/**
 * https://leetcode.com/problems/valid-anagram/submissions/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Time: O(n) - 104ms
//Space: O(n) - 41.1mb
let isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] === 1) {
            delete obj[t[i]];
        } else if (obj[t[i]] > 1) {
            obj[t[i]]--;
        } else {
            return false;
        }
    }

    return Object.keys(obj).length === 0;
}



//Time: O(nlogn) - 108ms
//Space: O(n) - 43.6mb
let isAnagram2 = function(s, t) {
    if (s.length !== t.length) return false;
    let sortedS = s.split('').sort();
    let sortedT = t.split('').sort();

    for (let i = 0; i < s.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return false;
        }
    }
    return true;
}

