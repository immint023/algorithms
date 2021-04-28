/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  let i = 0;
  let j = 0;
  const stack = [];
  const pushedLength = pushed.length;
  const poppedLength = popped.length;

  while (i < pushedLength || j < poppedLength) {
      if (popped[j] !== undefined && popped[j] === stack[stack.length - 1]) {
          stack.pop();
          j++;
      } else if (pushed[i] !== undefined) {
          stack.push(pushed[i])
          i++;
      } else {
          break;
      }
  }

  return !stack.length;
};