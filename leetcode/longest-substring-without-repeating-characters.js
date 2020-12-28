/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let a = 0;
   let b = 0;
   let max = 0;
   const mySet = new Set();
   while (a < s.length) {
     if (!mySet.has(s.charAt(a))) {
       mySet.add(s.charAt(a))
       a++;
       max = Math.max(mySet.size, max);
     } else {
       mySet.delete(s.charAt(b))
       b++;
     }
   }
   return max
};
