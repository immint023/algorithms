/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    const memo = {};
    
    function run(n) {
        if (memo[n]) {
            return memo[n];
        }
        
        if (n === 1 || n === 3) {
            return false;
        }
        
        if (n === 2) {
            return true;
        }
        
        for (let x = 1; x < n; ++x) {
            if (n % x === 0) {
                if (!run(n - x)) {
                    memo[n] = true;
                    return true;
                }
            }
        }
        
        memo[n] = false;
        return false;
    }
    
    return run(N);
};
