import re
# Solution with re
# class Solution:
#     def clearDigits(self, s: str) -> str:
#         regex = re.compile(r"[a-zA-Z][0-9]")
#         while regex.search(s):
#             s = regex.sub("", s)
#         return s

# Solution without re
class Solution:
    def clearDigits(self, s: str) -> str:
        answer = []
        for char in s:
            if(char.isalpha()):
                answer.append(char)
            else:
                answer.pop()
        return ''.join(answer)
    
print(Solution().clearDigits("a8f"))