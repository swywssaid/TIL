var solution = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map((participant) => (completion[participant] = (completion[participant] | 0) + 1))
  );

/*
1. completion[participant]이 되는 이유
find(a,b)
b가 먼저 처리됨. 따라서 map이 먼저 실행됨.

2. completion[participant] = (completion[participant] | 0) + 1
배열도 사실 객체이기 때문에 성립됨.
completion[participant]이 존재한다면 completion[participant] + 1
없다면 0 + 1 을 할당.

3. ["eden", "kiki", eden: 1, kiki: 1] 접근
forEach로는 접근할 수 없다. console 해보면 eden: 1, kiki: 1 는 undefined로 나옴
그 이유는 배열 객체의 속성으로 추가되기 때문

let test = ["cake", "ball", "sauce", "cake"];
test["cake"] = 1;
console.log(test.cake);  -> 1
console.log(test["cake"]);  -> 1
console.log(test[4]);  -> undefined
for (let a in test) {
  console.log(a);
}
for in 으로 접근 가능.
0
1
2
3
cake
*/
