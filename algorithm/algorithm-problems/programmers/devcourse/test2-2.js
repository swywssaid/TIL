const n = 2;
const queries = [
  "desktop1 request",
  "desktop2 request",
  "desktop1 release",
  "desktop2 release",
  "desktop3 request",
  "desktop3 release",
  "desktop2 request",
  "desktop1 request",
];
function solution(n, queries) {
  let answer = [];
  let desktopRecords = {};
  let ipRecords = [];
  let usingIp = [];
  let desktops = [...new Set(queries.map((x) => x.split(" ")[0]))];
  desktops.forEach((x) => (desktopRecords[x] = []));
  let type = queries.map((x) => x.split(" "));
  for (let i = 0; i < n; i++) {
    ipRecords.push(0);
    usingIp.push(0);
  }

  for (let j = 0; j < type.length; j++) {
    let used =
      desktopRecords[type[j][0]][desktopRecords[type[j][0]].length - 1];
    if (type[j][1] === "request") {
      if (desktopRecords[type[j][0]].length === 0) {
        if (usingIp.indexOf(0) === -1) {
          answer.push(`${type[j][0]} reject`);
        } else if (ipRecords.indexOf(0) === -1) {
          answer.push(`${type[j][0]} 192.168.0.${usingIp.indexOf(0) + 1}`);
          desktopRecords[type[j][0]].push(usingIp.indexOf(0) + 1);
          ipRecords[usingIp.indexOf(0)]++;
          usingIp[usingIp.indexOf(0)] = 1;
          console.log(1, desktopRecords, usingIp, ipRecords);
        } else if (ipRecords.indexOf(0) !== -1) {
          answer.push(`${type[j][0]} 192.168.0.${ipRecords.indexOf(0) + 1}`);
          desktopRecords[type[j][0]].push(usingIp.indexOf(0) + 1);
          usingIp[ipRecords.indexOf(0)] = 1;
          ipRecords[ipRecords.indexOf(0)]++;
          console.log(2, desktopRecords, usingIp, ipRecords);
        }
      } else if (desktopRecords[type[j][0]].length !== 0) {
        if (usingIp.indexOf(0) === -1) {
          answer.push(`${type[j][0]} reject`);
        } else if (usingIp[used - 1] === 1) {
          if (ipRecords.indexOf(0) === -1) {
            answer.push(`${type[j][0]} 192.168.0.${usingIp.indexOf(0) + 1}`);
            desktopRecords[type[j][0]].push(usingIp.indexOf(0) + 1);
            ipRecords[usingIp.indexOf(0)]++;
            usingIp[usingIp.indexOf(0)] = 1;
            console.log(5, desktopRecords, usingIp, ipRecords);
          } else if (ipRecords.indexOf(0) !== -1) {
            answer.push(`${type[j][0]} 192.168.0.${ipRecords.indexOf(0) + 1}`);
            desktopRecords[type[j][0]].push(usingIp.indexOf(0) + 1);
            usingIp[ipRecords.indexOf(0)] = 1;
            ipRecords[ipRecords.indexOf(0)]++;
            console.log(6, desktopRecords, usingIp, ipRecords);
          }
        } else if (usingIp[used - 1] !== 1) {
          answer.push(`${type[j][0]} 192.168.0.${usingIp.indexOf(0) + 1}`);
          desktopRecords[type[j][0]].push(usingIp.indexOf(0) + 1);
          ipRecords[usingIp.indexOf(0)]++;
          usingIp[usingIp.indexOf(0)] = 1;
          console.log(4, desktopRecords, usingIp, ipRecords);
        }
      }
    } else if (type[j][1] === "release") {
      usingIp[used - 1] = 0;
    }
  }
  console.log(answer);
  return answer;
}
solution(n, queries);
