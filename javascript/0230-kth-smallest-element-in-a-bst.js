/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//Time: O(n) - 92ms//Space: O(n) - 44.2mb
let kthSmallest = function(root, k) {
    if (k === 0) return -1;
    return kthSmallestHelper(root, [], k)[k - 1];
};

function kthSmallestHelper(root, arr = [], k) {
    if (root === null) return arr;
    kthSmallestHelper(root.left, arr, k);
    if (arr.length === k) return arr;
    arr.push(root.val);
    kthSmallestHelper(root.right, arr, k);
    return arr;
}


//Time: O(n) - 92ms
//Space: O(n) - 44.4mb
let kthSmallest2 = function(root, k) {
    if (k === 0) return -1;
    return kthSmallestHelper(root, root, {count: 0, value: null}, k).value;
};

function kthSmallestHelper(root, prev, obj, k) {
    if (obj.count === k) {
        obj.value = prev.val;
        return obj;
    }
    if (root === null) return obj;
    kthSmallestHelper(root.left, root, obj, k);
    obj.count++;
    kthSmallestHelper(root.right, root, obj, k);
    return obj;
}

