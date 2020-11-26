/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//Time: O(n) - 84ms
//Space: O(1) - 39.1mb
let invertTree = function(root) {
    if (root) {
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};