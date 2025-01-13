class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        common_factors = 0
        min_value = min(a, b)

        for i in range(1, min_value + 1):
            if a % i == 0 and b % i == 0:
                common_factors += 1
                
        return common_factors

# Test cases
print(Solution().commonFactors(12, 6))
print(Solution().commonFactors(35, 25))