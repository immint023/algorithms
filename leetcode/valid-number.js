/**
 * @param {string} s
 * @return {boolean}
 * ref: https://leetcode.com/problems/valid-number
 */
var isNumber = function(s) {
    s = s.trim();
    const length = s.length;
    if (
        s[0] === 'e' || 
        s[length - 1] === 'e' ||
        s[length - 1] === '+' || 
        s[length - 1] === '-'
    ) return false;
    
    if (s[0] === '.' && s[1] === 'e') return false;
    
    const integers = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    const signs = new Set(['e', '.', '+', '-']);
    
    let exponentCount = 0;
    let pointCount = 0;
    let integerCount = 0;
    let isNumber = false;
    
    
    for (let i = 0; i < length; ++i) {
        const char = s[i];
        if (!integers.has(char) && !signs.has(char)) {
            return false;
        };
        
        if (char === 'e') {
            if (!isNumber) return false;
            ++exponentCount;
        };
        if (char === '.') ++pointCount;
        
        if (integers.has(char)) {
            isNumber = true;
            ++integerCount;
        };
        
        if (char === '+' || char === '-' ) {
            if (i !== 0 && s[i - 1] !== 'e') return false;
        }
        
        if (exponentCount === 1 && char === '.') return false; 
        
        if (exponentCount > 1) return false; 
        if (pointCount > 1) return false;
    }
    
    return integerCount >= 1;
};
