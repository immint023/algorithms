/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const set = new Set(arr);
    
    let j = 0;
    let i = 1;
    while (true) {
        if (set.has(i)) {
            ++i;
            continue;
        };
        
        if (++j === k) return i; 
        ++i;
    }
};
