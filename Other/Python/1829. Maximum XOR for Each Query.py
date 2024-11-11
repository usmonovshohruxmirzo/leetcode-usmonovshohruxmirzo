from typing import List

class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        n = len(nums)
        xorr = nums[0]
        max_xor = (1 << maximumBit) - 1
        
        for i in range(1, n):
            xorr ^= nums[i]
        
        ans = []
        for i in range(n):
            ans.append(xorr ^ max_xor)
            xorr ^= nums[n - 1 - i]
        
        return ans

        