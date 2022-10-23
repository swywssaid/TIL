const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  let answer = [];
  const typeTable = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];
  for (let type in survey) {
    let disagree = survey[type].split("")[0];
    let agree = survey[type].split("")[1];
    if (choices[type] < 4) {
      typeTable.forEach((element) => {
        if (Object.keys(element).includes(disagree)) {
          element[disagree] += Math.abs(choices[type] - 4);
        }
      });
    } else if (choices[type] > 4) {
      typeTable.forEach((element) => {
        if (Object.keys(element).includes(agree)) {
          element[agree] += Math.abs(choices[type] - 4);
        }
      });
    }
  }
  typeTable.forEach((element) => {
    let myType = Object.keys(element);
    let score = Object.values(element);
    if (score[0] > score[1]) {
      answer.push(myType[0]);
    } else if (score[0] < score[1]) {
      answer.push(myType[1]);
    } else {
      answer.push(myType[0]);
    }
  });

  return answer.join("");
}
solution(survey, choices);
