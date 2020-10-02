/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * ref: https://leetcode.com/problems/permutations-ii
 */

var counter = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
};

var permuteUnique = function (nums) {
  var length = nums.length;
  var set = counter(nums);
  nums = [...new Set(nums)];

  var results = [];
  var arr = [];

  var helper = () => {
    for (let i = 0; i < length; ++i) {
      var item = nums[i];
      if (arr.length === length) {
        results.push([...arr]);
        return;
      }

      if (set[item] > 0) {
        arr.push(item);
        set[item] -= 1;
        helper();
        set[arr.pop()] += 1;
      }
    }
  };

  helper();

  return results;
};
