/**
 * @param {string} command
 * @return {string}
 * reference: https://leetcode.com
 */
var interpret = function (command) {
  var interpretedString = '';
  var commandLength = command.length;

  for (let i = 0; i < commandLength; ++i) {
    if (command[i] + command[i + 1] === '()') {
      interpretedString += 'o';
      ++i;
    } else if (command[i] !== '(' && command[i] !== ')') {
      interpretedString += command[i];
    }
  }

  return interpretedString;
};
