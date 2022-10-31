function solution(s) {
  let check = 0;
  for (let p of s) {
    check += p === "(" ? 1 : -1;
    if (check < 0) return false;
    else if (check > s.length / 2) return false;
  }

  return check ? false : true;
}
/* 
 for (let i = 0; i < s.length; i++)

 == for (let n of s)
 
 훨씬 가독성좋음.

 인덱스 이용하고 싶으면 
 for (let i of s)

*/
