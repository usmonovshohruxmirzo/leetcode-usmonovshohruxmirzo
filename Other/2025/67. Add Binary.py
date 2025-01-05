class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]
    
# Test cases
print(Solution().addBinary("11", "1")) # 100
print(Solution().addBinary("1010", "1011")) # 10101