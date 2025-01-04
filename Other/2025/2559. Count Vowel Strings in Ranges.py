# Should Review

from typing import List

class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        n = len(words)
        prefix = [0] * (n + 1)
        vowels = {"a", "e", "i", "o", "u"}

        for i in range(n):
            prefix[i + 1] = prefix[i]
            if words[i][0] in vowels and words[i][-1] in vowels:
                prefix[i + 1] += 1
        
        result = []
        for query in queries:
            result.append(prefix[query[1] + 1] - prefix[query[0]])

        return result

# Test cases
solution = Solution()
print(solution.vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]]))