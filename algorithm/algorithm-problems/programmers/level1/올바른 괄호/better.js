function solution(s) {
  let check = 0;
  let i = 0;
  while (i < s.length) {
    let target = s[i];
    check += target === "(" ? 1 : -1;
    i++;
    if (check < 0) return false;
    else if (check > s.length / 2) return false;
  }

  return check ? false : true;
}
/* 
 if (check < 0) return false;
 if (check > s.length / 2) return false;
 이건 효율성이 하나 시간초과 나오네. 뭐지
  */
