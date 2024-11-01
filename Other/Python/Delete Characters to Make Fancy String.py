def makeFancyString(s: str) -> str:
    answer = s[0]
    cnt = 1
    for i in range(1, len(s)):
        if s[i] == answer[-1]:
            cnt += 1
            if cnt < 3:
                answer += s[i]
        else:
            cnt = 1
            answer += s[i]
    return answer

print(makeFancyString("leetcode"))