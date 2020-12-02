/**
 * @param {string} s
 * @return {number}
 *
 * reference: https://leetcode.com/problems/roman-to-integer/submissions/
 */
var romanToInt = function(s) {
    var symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    };
    var total = 0;
    var stringLength = s.length
    
    for (let i = 0; i < stringLength; ++i) {
        if (symbols[s[i] + s[i + 1]]) {
            total += symbols[s[i] + s[i + 1]];
            ++i;
        } else {
            total += symbols[s[i]];
        }
    }
    
    return total;
};
