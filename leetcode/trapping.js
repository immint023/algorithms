// ref: https://leetcode.com/problems/trapping-rain-water/submissions/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length - 1;
    let result = 0;
    while (i < j) {
        let tempI = i + 1;
        let tempJ = j - 1;
        if (height[i] < height[j]) {
            while (height[i] > height[tempI]) {
                result += height[i] - height[tempI];
                ++tempI;
            }
            i = tempI;    
        } else {
            while (height[j] > height[tempJ]) {
                result += height[j] - height[tempJ];
                --tempJ;
            }
            j = tempJ;    
        }
    }
    return result;
};
