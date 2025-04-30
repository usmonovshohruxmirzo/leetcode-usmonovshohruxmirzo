public class Solution {
    public int FindNumbers(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            int num = Math.Abs(nums[i]).ToString().Length;
            if ((num & 1) == 0)
            {
                count++;
            }
        }
        return count;
    }
}

// LINQ Version
// public class Solution {
//     public int FindNumbers(int[] nums) {
//         return nums.Count(n => (Math.Abs(n).ToString().Length & 1) == 0);        
//     }
// }