# Should Review

from typing import List

class Solution:
    def primeSubOperation(self, nums: List[int]) -> bool:
        def getMaxElement(nums):
            return max(nums)

        maxElement = getMaxElement(nums)
        sieve = [True] * (maxElement + 1)
        sieve[1] = False

        for i in range(2, int((maxElement + 1) ** 0.5) + 1):
            if sieve[i]:
                for j in range(i + i, maxElement + 1, i):
                    sieve[j] = False

        currValue = 1
        i = 0
        while i < len(nums):
            difference = nums[i] - currValue
            
            if difference < 0: return False

            if sieve[difference] == True or difference == 0:
                i += 1
                currValue += 1
            else: 
                currValue += 1
    
        return True