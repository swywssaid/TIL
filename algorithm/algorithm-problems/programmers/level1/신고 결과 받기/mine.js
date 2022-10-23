const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
  let answer = [];
  let reportingList = {};
  let reportedCount = {};
  id_list.forEach((element) => {
    reportingList[element] = new Set();
    reportedCount[element] = 0;
    answer[element] = 0;
  });

  for (let i = 0; i < report.length; i++) {
    let reportingId = report[i].split(" ")[0];
    let reportedId = report[i].split(" ")[1];
    reportingList[reportingId].add(reportedId);
  }
  id_list.forEach((element) => {
    reportingList[element] = [...reportingList[element]];
    reportingList[element].forEach((item) => {
      reportedCount[item]++;
    });
  });

  id_list.forEach((element) => {
    if (reportedCount[element] >= k) {
      id_list.forEach((item) => {
        if (reportingList[item].includes(element) === true) {
          answer[item]++;
        }
      });
    }
  });
  return Object.values(answer);
}

solution(id_list, report, k);
