# Should Review
class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        letters = set(s)
        count = 0
        
        for letter in letters:
            i, j = s.index(letter), s.rindex(letter)
            between = set()

            for k in range(i + 1, j):
                between.add(s[k])
                print(between)

            count += len(between)

        return count
# Test Cases
solution = Solution()
print(solution.countPalindromicSubsequence("aabca"))
print(solution.countPalindromicSubsequence("abc"))
print(solution.countPalindromicSubsequence("bbcbaba"))