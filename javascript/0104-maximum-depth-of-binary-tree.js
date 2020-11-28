/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
//Time: O(n) - 80ms
//Space: O(n) - 41.4mb
let maxDepth = function(root) {
    return maxDepthHelper(root, 0);
};

function maxDepthHelper(root, depth) {
    if (root === null) return depth;
    depth++;
    return Math.max(maxDepthHelper(root.left, depth), maxDepthHelper(root.right, depth));
}


//Time: O(n) - 92ms
//Space: O(n) - 42.9mb
let maxDepth2 = function(root) {
    let arr = [{node: root, level: 0}];
    let max = 0;
    while (arr.length !== 0) {
        let current = arr.shift();
        if (current && current.node) {
            let level = current.level + 1;
            if (max < level) max = level;
            arr.push({node: current.node.left, level: level});
            arr.push({node: current.node.right, level: level});
        }
    }
    return max;
}