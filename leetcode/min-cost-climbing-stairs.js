/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {}

    function findMin(index) {
        if (memo[index]) return memo[index];
        if (index <= 1) return cost[1];

        const min1 = findMin(index - 1);
        const min2 = findMin(index - 2);
        
        const result = (cost[index] || 0) + Math.min(min1, min2);
        memo[index] = result;

        return result;
    }
    
    return findMin(cost.length);
};
