/**
 * @param {string} s
 * @return {string}
 * ref: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses
 */
var minRemoveToMakeValid = function(s) {
    const length = s.length;
    const idxes = [];
    const arr = [];
    let count = 0;
    let item;
    let output = '';
    
    for (let i = 0; i < length; ++i) {
        item = s[i];
        arr.push(item);
        if (item !== '(' && item !== ')') continue;
        if (item === '(') {
            ++count;
            idxes.push(i);
            arr[i] = undefined;
        } else if (item === ')' && count > 0) {
            --count;
            arr[idxes.pop()] = '(';
        } else {
            idxes.push(i)
            arr[i] = undefined;
        };
        
    }
    
    for (let i = 0; i < length; ++i) {
        if (arr[i]) output += arr[i];
    }
    return output;
};
