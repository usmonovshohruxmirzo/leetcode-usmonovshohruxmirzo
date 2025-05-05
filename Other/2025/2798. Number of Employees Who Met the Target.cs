// public class Solution {
//     public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
//         return hours.Count(x => x >= target);
//     }
// }

public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int count = 0;
        foreach (int hour in hours) if (hour >= target) count++;
        return count;
    }
}