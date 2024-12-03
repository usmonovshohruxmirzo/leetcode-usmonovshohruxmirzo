from typing import List

def addSpaces(s: str, spaces: List[int]) -> str:
    words = []
    space_index = 0
    
    for i in range(len(s)):
        if space_index < len(spaces) and i == spaces[space_index]:
            words.append(" ")
            space_index += 1

        words.append(s[i])

# test
print(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]))