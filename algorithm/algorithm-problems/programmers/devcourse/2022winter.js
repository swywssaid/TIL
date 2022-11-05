function solution(line) {
  let curr, prev;
  let check = 0;
  let showReg = [line[0]];
  for (let i = 1; i < line.length; i++) {
    prev = line[i - 1];
    curr = line[i];
    check = prev === curr ? 1 : 0;
    check === 0 ? showReg.push(line[i]) : showReg[i - 1] === "*" || showReg[i - 1] === "" ? showReg.push("") : showReg.push("*");
  }
  console.log(showReg.join(""));
  return showReg.join("");
}
solution("hellllllo");
/*
중복된 건 * 


*/
