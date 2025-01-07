class Solution:
    def isThree(self, n: int) -> bool:
        divisors = 0
        for num in range(1, n + 1):
            if n % num == 0:
                divisors += 1
        return True if divisors == 3 else False

# Test cases
print(Solution().isThree(2))
print(Solution().isThree(4))