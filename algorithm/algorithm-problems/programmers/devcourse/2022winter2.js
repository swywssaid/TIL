function solution(n, student, point) {
  // 처음 번호순 반 배정, 점수 셋팅
  let bad = [];
  for (let i = 1; i < n + 1; i++) {
    bad.push([i, 0]);
  }
  let good = bad.splice(0, bad.length / 2);

  // 변경횟수
  let cnt = 0;

  // 학생점수배정
  student.forEach((element, i) => {
    // 우반 점수 등록
    for (let stu = 0; stu < good.length; stu++) {
      if (good[stu][0] === element) good[stu][1] = point[i];
    }
    // 우반 점수 내림차순 정렬, 같으면 학생 올림차순.
    good.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });

    // 열반 점수 등록
    for (let stu = 0; stu < bad.length; stu++) {
      if (bad[stu][0] === element) bad[stu][1] = point[i];
    }
    // 열반 내림차순 정렬, 같으면 학생 올림차순.
    bad.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });

    // 반 편성
    let i = n;
    while (i) {
      if (good[good.length - 1][1] < bad[0][1]) {
        let degrade = good.pop();
        good.push(bad.shift());
        bad.unshift(degrade);
      }
      if (good[good.length - 1][1] === bad[0][1]) {
        if (good[good.length - 1][0] > bad[0][0]) {
          let degrade = good.pop();
          good.push(bad.shift());
          bad.unshift(degrade);
        }
      }
    }
    console.log(good, bad, cnt);
  });

  return cnt;
}

solution(6, [6, 1, 4, 2, 5, 1, 3, 3, 1, 6, 5], [3, 2, 5, 3, 4, 2, 4, 2, 3, 2, 2]);
// solution(10, [3, 2, 10, 2, 8, 3, 9, 6, 1, 2], [3, 2, 2, 5, 4, 1, 2, 1, 3, 3]);

/*
0. 학생과 총 누적 점수는 이중 배열로 묶자.
1. 우반에 넣는다.
1-2. 우반에 넣을 때 점수 비교를 한다. ->  점수로 내림차순.정렬.
1-3. 점수가 같다면 낮은 순으로 (점수 같은 것끼리 오름차순 정렬 후)

3. 새로 추가 될 경우(편성변경 시) 마지막 요소 아웃
3-1. 새로 추가시 편성 변경 카운트
4. 마지막에 편성 변경 회수 리턴
*/
