function solution(quiz) {
  return quiz.map((x) => {
    const [calc, result] = x.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [left, right] = calc.split(sign === 1 ? " + " : " - ");

    return Number(result) === Number(left) + sign * Number(right) ? "O" : "X";
  });
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
/*
1. 구조분해 할당.
스플릿 후 각각 변수에 할당하고 싶다.

2. 더하기 빼기 연산을 곱셈으로 처리


*/
