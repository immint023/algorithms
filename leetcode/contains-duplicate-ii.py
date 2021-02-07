class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dic = {}
        length = len(nums)
        for i, num in enumerate(nums):
            if dic.get(num) != None:
                absolute_length = i - dic.get(num)
                if absolute_length <= k:
                    return True
            
            dic[num] = i
                
        return False
