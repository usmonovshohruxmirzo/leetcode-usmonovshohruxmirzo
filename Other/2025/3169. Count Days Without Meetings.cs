public class Solution {
    public int CountDays(int days, int[][] meetings) {
        Array.Sort(meetings, (a, b) => a[0].CompareTo(b[0]));
        
        int totalCovered = 0;
        int start = meetings[0][0];
        int end = meetings[0][1];
        
        for (int i = 1; i < meetings.Length; i++) {
            if (end >= meetings[i][0]) {
                end = Math.Max(end, meetings[i][1]);
            } else {
                totalCovered += end - start + 1;
                start = meetings[i][0];
                end = meetings[i][1];
            }
        }
        
        totalCovered += end - start + 1;

        return days - totalCovered;
    }
}