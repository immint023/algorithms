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
 * @return {number[]}
 */
// Depth First Search
var averageOfLevels = function(root) {
    var result = [];
    var average = function(node, level) {
        if (node && node.val !== null) {
            if (!result[level]) result[level] = { count: 0, sum: 0}
            result[level].count += 1;
            result[level].sum += node.val;
            average(node.left, level + 1);
            average(node.right, level + 1);
        }
    }
    average(root, 0);
    return result.map(item => item.sum / item.count);
};
// Breath First Search
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
 * @return {number[]}
 */
// var averageOfLevels = function(root) {
//     var result = [];
//     var average = function(node, level) {
//         if (node && node.val !== null) {
//             if (!result[level]) result[level] = { count: 0, sum: 0}
//             result[level].count += 1;
//             result[level].sum += node.val;
//             average(node.left, level + 1);
//             average(node.right, level + 1);
//         }
//     }
//     average(root, 0);
//     return result.map(item => item.sum / item.count);
// };

var averageOfLevels = function(root) {
    var result = [];
    var queue = [];
    var temp = [];
    var sum = 0;
    var count = 0;
    var level = 0;
    
    queue.push(root);
    var average = function(node, level) {
        if (node && node.val !== null) {
            if (node.left) {
                temp.push(node.left);    
            }
            if (node.right) {
                temp.push(node.right);    
            }
            sum += node.val;
            ++count;

            if (!queue.length) {
                queue = [...temp];
                temp = [];
                result[level] = sum / count;
                sum = 0;
                count = 0;
                ++level;
            }
            average(queue.shift(), level);
        }
    }
    average(queue.shift(), level);
    return result;
};

/**
 * @input { [3,9,20,15,7] }
 * @expected { [3.00000,14.50000,11.00000] }
 * */
