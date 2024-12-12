class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        for n in t:
            if n in s: 
                s = s.replace(n, "", 1)
            else: 
                return n
            
# Test
solution = Solution()
print(solution.findTheDifference("abcd", "abcde"))

