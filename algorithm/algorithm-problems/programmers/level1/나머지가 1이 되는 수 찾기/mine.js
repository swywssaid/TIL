function solution(n) {
  var answer = 0;
  let results = [];
  for (let i = 2; i < 1000000; i++) {
    if (n % i === 1) {
      results.push(i);
    }
  }
  answer = Math.min.apply(null, results);
  return answer;
}
// 최소값이기 때문에 굳이 배열에 담아서 최솟값을 출력하지
// 않고 바로 리턴으로 종료시키면 된다.
