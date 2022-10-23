// 최대공약수 ( a > b )
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}

// 최소공배수: 두 수의 곱 / 최대공약수 ( a > b )
function fnLCM(a, b) {
  return (a * b) / fnGCD(a, b);
}
