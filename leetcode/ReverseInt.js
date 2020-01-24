/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
  let result = 0;
  
  while (n !== 0) {
      result = result * 10 + n % 10;
      n = parseInt(n / 10);
  }
  if (result <= -2147483648 || result >= 2147483647) {
      return 0;
  }
  return result;
};