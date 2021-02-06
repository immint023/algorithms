class Solution:
    def isAdjacent(self, first: str, second: str):
        return abs(ord(first) - ord(second)) == 32
    
    def makeGood(self, s: str) -> str:
        stack = []
        i = 0
        length = len(s)
        while i < length:
            char = s[i]
            stack.append(char)
            stack_length = len(stack)
            if stack_length >= 2 and self.isAdjacent(stack[stack_length - 1], stack[stack_length - 2]):
                stack.pop()
                stack.pop()
            i += 1
        return "".join(stack)
