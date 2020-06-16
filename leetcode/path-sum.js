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
 * @param {number} sum
 * @return {boolean}
 */
// ref: https://leetcode.com/problems/path-sum/submissions/
var hasPathSum = function(root, sum) {
    if (!root) return false;
    var helper = function(node, current) {
        if (!node) return false;
        if (!node.left && !node.right) return current + node.val === sum;
        return helper(node.left, current + node.val) || helper(node.right, current + node.val);
    }
    return helper(root , 0);
};
