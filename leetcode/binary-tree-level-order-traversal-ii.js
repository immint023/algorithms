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

// reference: https://leetcode.com/problems/binary-tree-level-order-traversal-ii//
var levelOrderBottom = function (root) {
  var arr = [];
  var helper = function (node, level) {
    if (!node) return;
    if (!arr[level]) arr[level] = [];
    arr[level].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root, 0);
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i += 1;
    j -= 1;
  }

  return result;
};
