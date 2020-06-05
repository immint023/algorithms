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
 * @return {number[][]}
 */
// reference: https://leetcode.com/problems/binary-tree-level-order-traversal/
var levelOrder = function(root) {
    var arr = [];
    var helper = function(node, level) {
        if (!node) return;
        if (!arr[level]) arr[level] = [];
        arr[level].push(node.val);
        if (node.left) {
           helper(node.left, level + 1); 
        }
        if (node.right) {
            helper(node.right, level + 1);
        }
    }
    helper(root, 0);
    return arr;
};
