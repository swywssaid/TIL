def solution(phoneBook):
    phoneBook = sorted(phoneBook)

    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True

print(sorted(["123", "12", "1234", "4", "1324"]))

"""
sorted(["123", "12", "1234", "4", "1324"])
문제풀이의 가장 중요한 키인듯. 정렬을 함으로 양옆에만 비교해도됨.
그 이유는 양옆에가 안되면 그 다음 인덱스는 당연히 안되기 때문.
이 풀이는 js 풀이에서도 중요한듯. 문자열 정렬
console.log(["123", "12", "1234", "4", "1324"].sort()); 도 동일

zip 함수
print(list(zip([1,2,3], (4,5,6), "abcd")))
### [[1, 4, 'a'], [2, 5, 'b'], [3, 6, 'c']]

startswith 함수
print("dfagd".startswith("abcd"))
print("abcde".startswith("abcd"))
### False
### True
"""