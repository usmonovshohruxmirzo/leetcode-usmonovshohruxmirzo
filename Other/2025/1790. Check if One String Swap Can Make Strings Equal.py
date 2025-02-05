class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if s1 == s2: return True
        diff = [i for i in range(len(s1)) if s1[i] != s2[i]]
        return len(diff) == 2 and s1[diff[0]] == s2[diff[1]] and s1[diff[1]] == s2[diff[0]]
         
# Test
s1 = "bank"
s2 = "kanb"
print(Solution().areAlmostEqual(s1, s2))  