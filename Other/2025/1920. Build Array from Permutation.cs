// public class Solution {
//     public int[] BuildArray(int[] nums) {
//         return nums.Select(i => nums[i]).ToArray();
//     }
// }

public class Solution {
    public int[] BuildArray(int[] nums) {
        int[] result = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++) {
            result[i] = nums[nums[i]];
        }
        return result;
    }
}