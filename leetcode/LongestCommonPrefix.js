/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(a) {
  if (!a.length) {
    return '';
  }
  let i = 0;
  let j = 0;
  let result = '';
  while (true) {
    let temp = a[0][j];
    if (temp === undefined) {
      return result;
    }
    if (a[i][j] === temp) {
      if (i === a.length - 1) {
        result += a[i][j];
      }
    } else {
      return result;
    }

    if (i === a.length - 1) {
      j++;
      i = 0;
    } else {
      i++;
    }
  }
};

