public class Solution {
    public IList<int> FindWordsContaining(string[] words, char x) {
        List<int> answer = new List<int>();
        for (int i = 0; i < words.Length; i++) if (words[i].Contains(x)) answer.Add(i);
        return answer;
    }
}