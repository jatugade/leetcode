/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
//Time: O(n) - 88ms
//Space: O(n) - 40mb
let isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack.pop() !== '(') {
            return false;
        } else if (s[i] === ']' && stack.pop() !== '[') {
            return false
        } else if (s[i] === '}' && stack.pop() !== '{') {
            return false;
        }
    }
    return stack.length === 0;
};