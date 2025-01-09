from typing import List

class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        count = 0
        for i in range(len(words)):
            if words[i].startswith(pref):
                count += 1
        return count

# Test cases
print(Solution().prefixCount(["pay","attention","practice","attend"], "at"))
print(Solution().prefixCount(["leetcode","win","loops","success"], "code"))