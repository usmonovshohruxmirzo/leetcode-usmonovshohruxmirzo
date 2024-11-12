from typing import List

class Solution:
    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:
        sorted_items = sorted(items, key = lambda x: x[1], reverse = True)
        answer = []
        
        for query in queries:
            for item in sorted_items:
                if item[0] <= query:
                    answer.append(item[1])
                    break
            else: 
                answer.append(0)
        return answer
    
# solution = Solution()
# print(solution.maximumBeauty(
#     [[1,2], [3,2], [2,4], [5,6], [3,5]], 
#     [1, 2, 3, 4, 5, 6]
# ))