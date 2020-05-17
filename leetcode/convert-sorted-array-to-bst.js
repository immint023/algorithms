/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */



var sortedArrayToBST = function(nums) {
    var insert = function(i, j) {
        if (i > j) return null;
        let midIndex = parseInt((j + i) / 2);
        let root = new TreeNode(nums[midIndex]);
        root.left = insert(i, midIndex - 1);
        root.right = insert(midIndex + 1, j);
        return root;
    }
    return insert(0, nums.length - 1);  
};


