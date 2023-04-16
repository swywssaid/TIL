function solution(ability) {
  let maxSum = 0;
  const students = ability.length; // 3
  const subjects = ability[0].length; // 2
  function dfs(subject, sum, visited) {
    if (subject === subjects) {
      maxSum = Math.max(maxSum, sum);
      return;
    }
    for (let student = 0; student < students; student++) {
      if (!visited[student]) {
        visited[student] = true;
        dfs(subject + 1, sum + ability[student][subject], visited);
        visited[student] = false;
      }
    }
  }
  dfs(0, 0, Array(students).fill(false));
  return maxSum;
}

/*




*/
