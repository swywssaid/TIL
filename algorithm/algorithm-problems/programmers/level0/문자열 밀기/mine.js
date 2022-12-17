function solution(A, B) {
  return A.repeat(2).includes(B) ? A.repeat(2).split(B)[1].length : -1;
}
/*
hellohello
appleapple

ohellohell
*/
