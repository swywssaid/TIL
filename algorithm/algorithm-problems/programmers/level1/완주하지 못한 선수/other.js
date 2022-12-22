function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

/*
위 풀이
테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.32ms, 33.5MB)
테스트 4 〉	통과 (0.55ms, 33.9MB)
테스트 5 〉	통과 (0.40ms, 33.8MB)
효율성  테스트
테스트 1 〉	통과 (49.47ms, 53.8MB)
테스트 2 〉	통과 (32.53ms, 62.6MB)
테스트 3 〉	통과 (34.11ms, 67.7MB)
테스트 4 〉	통과 (36.00ms, 67MB)
테스트 5 〉	통과 (63.69ms, 63.3MB)

내풀이
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


*/
