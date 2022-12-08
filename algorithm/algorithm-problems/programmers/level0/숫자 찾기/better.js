function solution(num, k) {
  return num.toString().indexOf(k) + 1 || -1;
}

/*
1. String() vs toString()
String() => value + ""
null.toString() => TypeError
2. ||: 
*/
