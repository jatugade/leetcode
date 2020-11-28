/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */


//Time: O(n) - 80ms
//Space: O(1) - 38mb
let balancedStringSplit = function(s) {
    let count = 0;
    let stackCounter = 0;
    for (const c of s) {
        if (c === 'R') {
            stackCounter++
        } else if (c === 'L') {
            stackCounter--;
        }

        if (stackCounter === 0) count++;
    }
    return count;
};


//Time: O(n) : 76ms
//Space: O(n) : 39.7mb
let balancedStringSplit2 = function(s) {
    let stack = [];
    let count = 0;
    for (const c of s) {
        if (c === 'R' && stack[stack.length - 1] === 'L' || c === 'L' && stack[stack.length - 1] === 'R') {
            stack.pop();
            if (stack.length === 0) {
                count++
            }
        } else {
            stack.push(c);
        }
    }
    return count;
};

