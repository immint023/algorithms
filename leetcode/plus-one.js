/**
 * @param {number[]} digits
 * @return {number[]}
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 */
var plusOne = function(digits) {
  for (let i = digits.length -1; i >= 0; i--) {
      if (digits[i] !== 9){
          digits[i]++;
          return digits;
      } else {
          digits[i] = 0;
      }
  }
  digits.unshift(1);
  return digits;
};

