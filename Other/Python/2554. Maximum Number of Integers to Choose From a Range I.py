from typing import List

class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned_set = set(banned)
        total_sum = 0
        count = 0

        for i in range(1, n + 1):
            if i in banned_set:
                continue
            total_sum += i
            if total_sum > maxSum: 
                break
            count += 1
        
        return count
    
solution = Solution()

print(solution.maxCount([1, 6, 5], 5, 6))