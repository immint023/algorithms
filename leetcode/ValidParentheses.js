/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const obj = { 
    "(": ")",
    "{": "}",
    "[": "]",
  }  
  for (let item of s) {
    const lastItem = stack[stack.length - 1]
    if (obj[lastItem] === item) {
      stack.pop();
    } else {
      stack.push(item)
    }
  }
  return !stack.length;
};