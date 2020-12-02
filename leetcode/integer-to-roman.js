/**
 * @param {number} num
 * @return {string}
 * reference: https://leetcode.com/problems/integer-to-roman/submissions
 */
var intToRoman = function(num) {
    var symbols = {
        '1000': 'M',
         '900': 'CM',
        '500': 'D',
        '400': 'CD',
        '100': 'C',
        '90': 'XC',
        '50': 'L',
        '40': 'XL',
        '10': 'X',
        '9': 'IX',
        '5': 'V',
        '4': 'IV',
        '1': 'I',
    };
    
    var ranks = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var rankLength = ranks.length;
    var roman = '';
    
    while (num != 0) {
        for (let i = 0; i < rankLength; ++i) {
            if (num >= ranks[i]) {
                roman += symbols[ranks[i]];
                num -= ranks[i];
                break;
            }    
        }       
    }
    return roman;
};
