from typing import List

class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        res = []
        l = 0
        consec_cnt = 1
        for r in range(len(nums)):
            if r > 0 and nums[r - 1] + 1 == nums[r]:
                consec_cnt += 1

            if r - l + 1 > k:
                if nums[l] + 1 == nums[l + 1]:
                    consec_cnt -= 1
                l += 1

            if r - l + 1 == k:
                res.append(nums[r] if consec_cnt == k else -1)

        return res