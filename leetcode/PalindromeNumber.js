/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  if (x < 0) {
      return false;
  }
  let result = 0;
  let i = 0;
  let j = x.length - 1;
  while (i < j) {
      if (x[i] !== x[j]) {
          return false
      }
      i++;
      j--;
  }
  return true;
};