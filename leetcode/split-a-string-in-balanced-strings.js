/**
 * @param {string} s
 * @return {number}
 * ref: https://leetcode.com/problems/split-a-string-in-balanced-strings
 */
var balancedStringSplit = function(s) {
    let l = 0;
    let r = 0;
    let count = 0;
    
    const length = s.length;
    
    for (let i = 0; i < length; ++i) {
        const char = s[i];
        
        if (char === 'L') ++l;
        if (char === 'R') ++r;
        
        if (l === r) {
            r = l = 0;
            ++count;
        };
    }
    
    return count;
};


