/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let str = '';
    let word = '';
    
    for (let i = s.length - 1; i >= 0; --i) {
        const char = s[i];
        if (char === ' ' && word.length) {
            str = str + ' ' + word;
            word = ''
        } else if (char !== ' ') {
            word = char + word;
        }
    }
    str = str + ' ' + word;
    
    return str.trim();
};
