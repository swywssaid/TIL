const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt") // boj: '/dev/stdin'
  .toString()
  .split("\n");

function solution() {
  console.log(`           ,r'"7
  r\`-_   ,'  ,/
   \\. ". L_r'
     \`~\\/
        |
        |
  `);
}
solution();
