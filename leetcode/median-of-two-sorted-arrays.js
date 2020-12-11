/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * ref: https://leetcode.com/problems/median-of-two-sorted-arrays
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0;
    var j = 0;
    var arr = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i++]);
        } else {
            arr.push(nums2[j++]);
        }
    }
    
    while (i < nums1.length) {
        arr.push(nums1[i++]);
    }
    while (j < nums2.length) {
        arr.push(nums2[j++]);
    }
        
    var length = arr.length;
    
    var mid = Math.floor(length / 2);
    
    if (length % 2 !== 0) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
};
