class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        count_zero = 0
        i = 0
        while i < len(nums):
            item = nums[i]
            if item == 0:
                nums.remove(0)
                count_zero = count_zero + 1
            else:
                i = i + 1
        for i in range(count_zero):
            nums.append(0)
