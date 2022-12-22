function solution(participant, completion) {
  const table = {};
  participant.forEach((person) => (table[person] = table[person] === undefined ? 0 : --table[person]));
  completion.forEach((person) => table[person]++);

  return Object.keys(table).filter((person) => table[person] === 0)[0];
}

/*
시간복잡도: O(N)
테스트 1 〉	통과 (0.17ms, 33.4MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.36ms, 33.5MB)
테스트 4 〉	통과 (0.54ms, 33.7MB)
테스트 5 〉	통과 (0.55ms, 33.7MB)
효율성  테스트
테스트 1 〉	통과 (46.14ms, 54.9MB)
테스트 2 〉	통과 (53.36ms, 57MB)
테스트 3 〉	통과 (39.37ms, 62.3MB)
테스트 4 〉	통과 (74.49ms, 69.9MB)
테스트 5 〉	통과 (80.50ms, 70.3MB)


# 실패 코드
function solution(participant, completion) {
  completion.forEach((person) => {
    participant.splice(participant.indexOf(person), 1);
  });
  return participant[0];
}

시간복잡도: O(N^2)
효율성 테스트 0점...
*/
