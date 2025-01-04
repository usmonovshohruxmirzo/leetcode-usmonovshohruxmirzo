# Should Review

def canChange(start: str, target: str) -> bool:
    if start == target:
        return True
    waitL = 0
    waitR = 0

    for curr, goal in zip(start, target):
        print(curr, goal)
        if curr == "R":
            if waitL > 0: return False
            waitR += 1
        if goal == "L":
            if waitR > 0: return False
            waitL += 1
        if goal == "R":
            if waitR == 0: return False
            waitR -= 1
        if curr == "L":
            if waitL == 0: return False
            waitL -= 1
    return waitL == 0 and waitR == 0

# Test cases
# print(list(zip("abc", "123", "#$%")))

print(canChange("_L__R__R_", "L______RR"))
print(canChange("R_L_", "__LR"))
print(canChange("_R", "R_"))