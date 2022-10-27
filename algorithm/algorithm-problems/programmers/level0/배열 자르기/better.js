function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
/*
slice는 기존 배열을 건드리지 않음.
문자열, 숫자 변경은 영향 없음.

다만 객체 참조일 때 주의해야함.

let myHonda = { color: "red" };
let myCar = [myHonda];
let newCar = myCar.slice(0);
newCar[0].color = "blue";
console.log(myHonda, myCar, newCar); 
-> { color: 'blue' } [ { color: 'blue' } ] [ { color: 'blue' } ]


마지막 인자 안넣으면 배열 끝까지.
*/
