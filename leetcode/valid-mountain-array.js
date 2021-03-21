/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  if (arr.length <= 2) return false;
  let increase = 0;
  let decrease = 0;

  for (let i = 0, length = arr.length; i < length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];
      if (current === next) return false;
      if (current < next) {
          if (decrease) {
              return false;
          }
          if (!increase) {
              increase = 1;
          }
      } else {
          if (!increase) {
              return false;
          }
          if (!decrease) {
              decrease = 1;
          }
      }
  }

  return increase === 1 && decrease === 1;
};