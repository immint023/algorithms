/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 *
 * ref: https://leetcode.com/problems/relative-sort-array
 */
var relativeSortArray = function(arr1, arr2) {
    const result = [];
    const arr1Count = {};
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    
    // count the number of appearance of each elements
    for (let i = 0; i < arr1Length; ++i) {
        arr1Count[arr1[i]] = arr1Count[arr1[i]] ? arr1Count[arr1[i]] + 1 : 1;
    }
    
    // sort elements that appear in arr2
    for (let i = 0; i < arr2Length; ++i) {
        const item = arr2[i];
        if (arr1Count[item]) {
            result.push(item);
            --arr1Count[item];
            --i;
        } else {
          // clean up elements that count equal zero
          delete arr1Count[item];
        }
    }

    // get rest of elements
    const restElements = [];
    for (const item in arr1Count) {
        if (arr1Count[item]) restElements.push(item);
    }
    
    // continue sort rest of elements
    for (let i = 0; i < restElements.length; ++i) {
        const item = restElements[i];
        if (arr1Count[item]) {
            result.push(item);
            --arr1Count[item];
            --i;
        }
    }
    
    return result;
};
