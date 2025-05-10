public class Solution {
    public int ArithmeticTriplets(int[] nums, int diff) {
        int count = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                for (int k = j + 1; k < nums.Length; k++)
                {
                    if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff)
                    {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}