class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        word = sentence.split()
        for i in range(len(word) - 1):
            if word[i][-1] == word[i + 1][0]: pass
            else: return False
        return True if word[0][0] == word[-1][-1] else False