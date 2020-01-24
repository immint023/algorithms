/**
 * @param {string} s
 * @return {string}
 * Example
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */
var reverseWords = function(s) {
  const wordLength = s.length;
  let word = '';
  let reversedWord = '';

  for (let i = 0; i <= wordLength; ++i) {
    if (s[i] === ' ' ) {
      word += reversedWord + ' ';
      reversedWord = '';
    } else if (i == wordLength) {
      word += reversedWord  
    } else {
      reversedWord = s[i] + reversedWord;
    }
  }
  return word;
};
