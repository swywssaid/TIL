function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

/*
이 문제에 특화되게 푸는 법.
범용적이진 않다.
*/
