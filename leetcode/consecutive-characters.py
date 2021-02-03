class Solution:
    def maxPower(self, s: str) -> int:
        power = 0
        sub_str = ""
        for char in s:
            if sub_str.endswith(char):
                sub_str += char
            else:
                sub_str = char
            power = max(len(sub_str), power)

        return power
