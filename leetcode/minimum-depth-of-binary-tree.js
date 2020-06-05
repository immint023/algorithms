/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// reference: https://leetcode.com/problems/minimum-depth-of-binary-tree/
var minDepth = function(root) {
    if (!root) return 0;
    var helper = function(node, level) {
        if (node) {
            if (!node.left && !node.right) {
                return level;
            }
            const leftCount = helper(node.left, level + 1);
            const rightCount = helper(node.right, level + 1);
            if (!rightCount) return leftCount;
            if (!leftCount) return rightCount;
            return Math.min(leftCount, rightCount);
        }
    }
    return helper(root, 1);
};
