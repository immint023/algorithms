// ref: https://leetcode.com/problems/container-with-most-water/solution/
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let result = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        if (height[i] < height[j]) {
            const water = height[i] * (j - i);
            if (water > result) result = water;
            ++i;
        } else {
            const water = height[j] * (j - i);
            if (water > result) result = water;
            --j;
        }
    }
    return result;
};

