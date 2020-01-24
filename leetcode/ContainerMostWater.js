/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let maxL = height[i];
  let maxR = height[j];
  let area = 0;
  let max = 0;
  while (i < j) {
      if (maxL <= maxR) {
          area = maxL * (j -i);
          max = Math.max(area, max);
          i++
          maxL = height[i];
          
      } else {
          area = maxR * (j -i)
          max = Math.max(area, max);
          j--;
          maxR = height[j];
      }
  }
  return max;
};
