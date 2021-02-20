class Solution:

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left = [1]
        right = [1]
        output = []
        i = 0
        length = len(nums)
        while i < length - 1:
            left.append(left[-1] * nums[i])
            i += 1
        i = length - 1
        while i > 0:
            right.append(right[-1] * nums[i])
            i -= 1
        for i in range(length):
            output.append(left[i] * right[length - 1 - i])
        return output
