/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const stack = {};
  for (let i = 0; i < nums.length; i++) {
      const a = target - nums[i]; // 9 - 7 =>> a = 2;
  
      if (stack[a] === undefined) {
          stack[nums[i]] = i;
          continue;
      }
      
      return [stack[a], i];
      
  }
};