class Solution:
    def split_number(self, num: int) -> List[str]:
        output = []
        if num == 1:
            return []
        while num != 0:
            output.insert(0, str(num % 10))
            num = int(num / 10)
        return output
    
    def compress(self, chars: List[str]) -> int:
        if len(chars) == 1:
            return 1
        i = 0
        last = chars[0]
        count = 0
        counter = []
        consecutive = []
        while i < len(chars):
            char = chars[i]
            if char != last:
                last = char
                count = 1
                counter = counter + consecutive
                consecutive = [char]
            else:
                count += 1
                consecutive = [char] + self.split_number(count)
            i += 1
        counter = counter + consecutive
        
        for i in range(len(counter)):
            chars[i] = counter[i]
            
        i = len(counter)
        while i < len(chars):
            del chars[i]
            
        return len(chars)
