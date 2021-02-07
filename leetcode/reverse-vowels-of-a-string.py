class Solution:
    def reverseVowels(self, s: str) -> str:
        list_vowel = []
        vowel_char = {"e", "u", "o", "a", "i", "E", "U", "O", "A", "I"}
        reversed_str = ""

        for char in s:
            if char in vowel_char:
                list_vowel.append(char)
        for index, char in enumerate(s):
            if char in vowel_char:
                reversed_str += list_vowel.pop()
            else:
                reversed_str += char

        return reversed_str
