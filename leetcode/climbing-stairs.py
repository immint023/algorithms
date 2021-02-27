class Solution:
    memo = {}
    def step(self, sum: int) -> int:
        if sum in self.memo:
            return self.memo.get(sum)
        
        if sum <= 2:
            return sum
        
        result = self.step(sum - 1) + self.step(sum - 2)
        self.memo[sum] = result
        
        return result
        
    def climbStairs(self, n: int) -> int:
        return self.step(n)

