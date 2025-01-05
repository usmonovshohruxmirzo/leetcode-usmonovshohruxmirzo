from typing import List

class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        n = len(s)
        shift_diff = [0] * (n + 1)

        for shift in shifts:
            start, end, direction = shift

            if direction == 1:
                shift_diff[start] += 1
                if end + 1 < n:
                    shift_diff[end + 1] -= 1
            else:
                shift_diff[start] -= 1
                if end + 1 < n:
                    shift_diff[end + 1] += 1
            
        shift = 0
        s_list = list(s)
        for i in range(n):
            shift += shift_diff[i]
            current_char = s_list[i]
            new_char = chr((ord(current_char) - ord("a") + shift) % 26 + ord("a"))
            """
                1. ord("a") = 97
                2. ord("a") - ord("a") = 97 - 97 = 0
                3. 0 + 1 = 1 (we shift forward by 1).
                4. (1) % 26 = 1 (no wrapping needed).
                5. 1 + ord("a") = 1 + 97 = 98.
                6. chr(98) = "b".
                So, "a" shifted forward by 1 becomes "b".
            """
            s_list[i] = new_char

        return "".join(s_list)

# Test cases
print(Solution().shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]]))
print(Solution().shiftingLetters("dztz", [[0,0,0],[1,1,1]]))