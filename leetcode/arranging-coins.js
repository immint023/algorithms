/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let completeRowCount = 0;
    let stairLevel = 1;
    
    while (n > 0) {
        if (n - stairLevel >= 0) {
            ++completeRowCount;
        }
        
        n = n - stairLevel++;
    }
    
    return completeRowCount;
};
