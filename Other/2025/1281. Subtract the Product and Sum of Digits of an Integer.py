class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        nums = list(map(int, str(n)))
        a = 1
        b = 0
        
        for num in nums:
            a *= num

        for num in nums:
            b += num
        
        return a - b


print(Solution().subtractProductAndSum(234))