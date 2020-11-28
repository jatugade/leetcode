/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/same-tree/
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//Recursive Solution
//Time: O(n) - 76ms
//Space: O(n) - 38.9mb
let isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//Iterative Solution
//Time: O(n) - 60ms
//Space: O(n) - 40.5mb
let isSameTree2 = function(p,q) {
    let arrP = [p];
    let arrQ = [q];
    while (arrP.length !== 0 && arrQ.length !== 0) {
        let currentP = arrP.shift() || '';
        let currentQ = arrQ.shift() || '';
        if (currentP.val !== currentQ.val) return false;
        if (currentP && currentQ) {
            arrP.push(currentP.left, currentP.right);
            arrQ.push(currentQ.left, currentQ.right);
        }
    }
    return arrP.length === arrQ.length;
}