const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));
  console.log(MBTI);
  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
const [a, b, c] = "123";
console.log(a, b, c);
solution(survey, choices);

// 삼항연산자(es6는 아님):  조건 ? true일때 : false일 때
// 구조 분해: 객체, 배열, 문자열 됨
