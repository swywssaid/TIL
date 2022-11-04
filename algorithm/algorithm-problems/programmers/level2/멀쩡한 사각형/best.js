function solution(w, h) {
  let cnt = 0;
  for (let i = 1; i < w; i++) {
    cnt += Math.floor((h * i) / w);
  }
  return cnt * 2;
}

/*
기울기를 이용한 제일 현실적인 풀이.
주의할 점은 나눗셈 연산을 먼저할 경우 가끔 케이스 통과를 못하는 경우가 발생.
아래 두개는 에러 발생함.특정 케이스에서
따라서 위처럼 곱셈후 나눗셈을하자.

function solution(w, h) {
  const slope = h / w;
  let cnt = 0;
  for (let i = 1; i < w; i++) {
    cnt += Math.floor(slope * i);
  }
  return cnt * 2;
}

function solution(w, h) {
  let cnt = 0;
  for (let i = 1; i < w; i++) {
    cnt += Math.floor((h / w) * i);
  }
  return cnt * 2;
}
*/
