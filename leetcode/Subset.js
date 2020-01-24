/**
 * @param {number[]} nums
 * @return {number[][]}
 * Example
 * Input: nums = [1,2,3]
 * Output:
 *  [
 *    [3],
 *    [1],
 *    [2],
 *    [1,2,3],
 *    [1,3],
 *    [2,3],
 *    [1,2],
 *    []
 *  ]
 */
var subsets = function(nums) {
  var results = [];
  var helper = (nums, mySet, i) => {
    if (i === nums.length) {
      results.push(mySet);
      return;
    }
    helper(nums, mySet, i + 1);
    helper(nums, mySet.concat(nums[i]), i + 1);
  }
  helper(nums, [], 0);
  return results;
    
};