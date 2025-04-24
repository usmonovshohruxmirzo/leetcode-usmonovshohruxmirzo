// public class Solution {
//     public int[] TransformArray(int[] nums) {
//         List<int> answer = new List<int>();
//         for (int i = 0; i < nums.Length; i++) 
//         {
//             if ((nums[i] & 1) == 1) answer.Add(1);
//             else answer.Add(0);
//         }
//         return answer.OrderBy(x => x).ToArray();
//     }
// }

// public class Solution {
//     public int[] TransformArray(int[] nums) {
//         List<int> answer = new List<int>();
//         for (int i = 0; i < nums.Length; i++) answer.Add((nums[i] & 1) == 1 ? 1 : 0);
//         return answer.OrderBy(x => x).ToArray();
//     }
// }

public class Solution {
    public int[] TransformArray(int[] nums) {
        return nums.Select(n => (n & 1) == 1 ? 1 : 0).OrderBy(x => x).ToArray();
    }
}