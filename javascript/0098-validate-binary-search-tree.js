/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//Time: O(n) - 104ms
//Space: O(n) - 45.8mb
var isValidBST = function(root) {
    let arr = bstToArr(root);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
};

function bstToArr(root) {
    let arr = [];
    if (root !== null) {
        let left = bstToArr(root.left);
        let right = bstToArr(root.right);
        arr = arr.concat(left)
        arr.push(root.val);
        arr = arr.concat(right);
    }
    return arr;
}