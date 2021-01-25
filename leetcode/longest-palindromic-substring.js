/**
 * @param {string} s
 * @return {string}
 * ref: https://leetcode.com/problems/longest-palindromic-substring
 */
// var longestPalindrome = function(s) {
//     if (s.length === 1) return s;
//     let max = '';

//     const isPalindromic = function(subString) {
//         const length = subString.length;
//         let i = 0;
//         while (i <= parseInt(length / 2)) {
//             if (subString[i] !== subString[length - i - 1]) return false;
//             ++i;
//         }
//         return true;
//     }

//     for (let i = 0, length = s.length; i < length; ++i) {
//         let subString = '';
//         for (let j = i; j < length; ++j) {
//             subString += s[j];
//             if (isPalindromic(subString)) {
//                 if (subString.length > max.length) max = subString;
//             }
//         }
//     }

//     return max;
// };

var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let longest = '';
  let substr = '';
  let isSameString = false;

  for (let i = 0, length = s.length; i < length; ++i) {
    let isPalindromic = true;
    let j = i;

    while (isPalindromic && j < length) {
      if (isSameString) {
        if (s[j] === substr[substr.length - 1]) {
          substr = substr + s[j];
          ++j;
          continue;
        }
        isSameString = false;
      }

      if (s[j] === s[j - substr.length - 1]) {
        if (substr.length === 0) isSameString = true;
        substr = s[j - substr.length - 1] + substr + s[j];
        ++j;
      } else if (s[j] === s[j - 2] && substr.length === 0) {
        substr = s[j - 2] + s[j - 1] + s[j];
        ++j;
      } else {
        isPalindromic = false;
      }
    }

    longest = substr.length > longest.length ? substr : longest;
    substr = '';
  }

  return longest.length ? longest : s[0];
};
