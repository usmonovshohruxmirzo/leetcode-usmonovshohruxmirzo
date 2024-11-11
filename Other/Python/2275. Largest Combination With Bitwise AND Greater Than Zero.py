from typing import List 
class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        answer = 0
        for i in range(32):
            cnt = sum(1 for candidate in candidates if candidate & (1 << i))
            answer = max(answer, cnt)
        return answer