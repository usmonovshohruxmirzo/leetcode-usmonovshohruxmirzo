def canMakeSubsequence(str1: str, str2: str) -> bool:
    index, n = 0, len(str2)
    print(index, n)

    for char in str1:
        if index == n: 
            break
        
        if char == str2[index]:
            index += 1
            continue

        next_char = "a" if char == "z" else chr(ord(char) + 1)
        if next_char == str2[index]:
            index += 1
        
    return index == n

print(canMakeSubsequence("abc", "ad"))