/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === t) return true;
    
    for (let i = 0, k = 0, length = t.length, sLength = s.length; i < length; ++i) {
        if (s[k] === t[i]) {
            k++;
        }
        if (k === sLength) return true;
    }
    
    return false;
};
