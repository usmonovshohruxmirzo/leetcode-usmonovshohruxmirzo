from typing import List

class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        total_sum = sum(nums)
        left_sum = 0
        valid_splits = 0
        print(total_sum)

        for i in range(len(nums) - 1):
            left_sum += nums[i]
            right_sum = total_sum - left_sum
            if left_sum >= right_sum:
                valid_splits += 1

        return valid_splits
    
# Test Cases
solution = Solution()
print(solution.waysToSplitArray([10, 4, -8, 7]))
# print(solution.waysToSplitArray([2, 3, 1, 0]))


# Solution 2: Prefix Sum Array
class Solution:
    def waysToSplitArray(self, nums: list[int]) -> int:
        n = len(nums)
        prefix_sum = [0] * n
        prefix_sum[0] = nums[0]

        for i in range(1, n):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i]

        count = sum(1 for i in range(n - 1) if prefix_sum[i] >= prefix_sum[-1] - prefix_sum[i])
        
        return count