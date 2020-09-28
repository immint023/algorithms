/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * ref: https://leetcode.com/problems/permutations//
 */
var permute = function (nums) {
  if (nums.length === 0) return [[]];
  var arr = [];
  var results = [];
  var length = nums.length;
  var set = new Set();

  var helper = () => {
    for (let i = 0; i < length; ++i) {
      var item = nums[i];
      if (arr.length === length) {
        results.push([...arr]);
        return;
      }

      if (!set.has(item)) {
        arr.push(item);
        set.add(item);
        helper();
        set.delete(arr.pop());
      }
    }
  };

  helper();

  return results;
};
