from typing import List
from math import inf

class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        answer = inf
        d = {}

        for i, x in enumerate(nums):
            d = {or_val | x: left for or_val, left in d.items()}
            d[x] = i

            for or_val, left in d.items():
                if or_val >= k:
                    answer = min(answer, i - left + 1)
                    
        return answer if answer < inf else -1
        