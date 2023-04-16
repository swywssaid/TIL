function solution(ability) {
  const students = ability.length;
  const events = ability[0].length;
  function dfs(event, visited) {
    if (event === events) {
      let sum = 0;
      for (let i = 0; i < students; i++) {
        if (visited[i] !== false) {
          sum += ability[i][visited[i]];
        }
      }
      return sum;
    }
    let maxSum = 0;
    for (let student = 0; student < students; student++) {
      if (visited[student] === false) {
        visited[student] = event;
        maxSum = Math.max(maxSum, dfs(event + 1, visited));
        visited[student] = false;
      }
    }
    return maxSum;
  }
  return dfs(0, Array(students).fill(false));
}
