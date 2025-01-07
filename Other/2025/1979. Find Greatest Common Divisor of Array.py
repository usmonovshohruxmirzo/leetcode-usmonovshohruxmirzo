from typing import List
import math

class Solution:
    def findGCD(self, nums: List[int]) -> int:
        return math.gcd(min(nums), max(nums))

# Test cases
print(Solution().findGCD([2,5,6,9,10]))    
print(Solution().findGCD([7,5,6,8,3]))    
print(Solution().findGCD([3,3]))    
