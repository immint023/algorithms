/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function countAppearance(nums) {
    const hash = {};
    
    for (let i = 0, length = nums.length; i < length; ++i) {
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1; 
    }
    
    return hash;
}

var intersect = function(nums1, nums2) {
    const hash = countAppearance(nums1);
    const results = [];
    
    for (let i = 0, length = nums2.length; i < length; ++i) {
        if (hash[nums2[i]]) {
            results.push(nums2[i]);
            hash[nums2[i]] = hash[nums2[i]] - 1;
        }
    }
    
    return results;
};

