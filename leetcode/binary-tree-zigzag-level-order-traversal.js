/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * reference: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  var res = [];
  var queue = [];
  var temp = [];
  var level = 0;
  var helper = function (root) {
    if (root) {
      if (!res[level]) {
        res[level] = [root.val];
      } else {
        res[level].push(root.val);
      }

      if (level % 2 === 0) {
        root.left && temp.push(root.left);
        root.right && temp.push(root.right);
      } else {
        root.right && temp.push(root.right);
        root.left && temp.push(root.left);
      }

      if (!queue.length) {
        queue = temp;
        temp = [];
        level += 1;
      }

      helper(queue.pop());
    }
  };

  helper(root);

  return res;
};
