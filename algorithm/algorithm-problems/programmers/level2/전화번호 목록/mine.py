import re
def solution(phone_book):
    for head in range(0, len(phone_book)):
        for num in range(head, len(phone_book)):
            if re.match(phone_book[head], phone_book[num]): 
                return True
            else: 
                return False
## 효율성 실패 3,4 번