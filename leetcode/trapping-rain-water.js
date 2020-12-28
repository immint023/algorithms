/**
 * @param {number[]} height
 * @return {number}
 * ref: https://leetcode.com/problems/trapping-rain-water
 */
var trap = function(height) {
    let i = 0;
    let _i = i + 1;
    let j = height.length - 1;
    let _j = j - 1;
    
    let water = 0;
    
    while (i < j) {
        if (height[i] < height[j] && height[_i] >= height[i]) i = _i++;
        
        else if (height[i] >= height[j] && height[_j] >= height[j]) j = _j--;
        
        else if (height[i] < height[j]) water += height[i] - height[_i++];
        
        else if (height[i] >= height[j]) water += height[j] - height[_j--];
    }
    
    return water;
};
