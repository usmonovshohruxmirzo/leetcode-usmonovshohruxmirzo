from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        single = 0
        for i in range(len(nums)):
            single ^= nums[i]
        return single

# Test cases
print(Solution().singleNumber([2,2,1]))
print(Solution().singleNumber([4,1,2,1,2]))
print(Solution().singleNumber([1]))