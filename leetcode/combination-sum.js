/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * reference: https://leetcode.com/problems/combination-sum/submissions/
 */

var combinationSum = function (candidates, target) {
  var results = [];
  var array = [];
  var sumValue = 0;

  var helper = (index) => {
    for (let i = index; i < candidates.length; ++i) {
      var item = candidates[i];

      array.push(item);

      sumValue += item;

      if (sumValue === target) {
        results.push([...array]);
      }

      if (sumValue < target) {
        helper(i);
      }

      sumValue -= array.pop();
    }
  };

  helper(0);

  return results;
};
