function solution(dots) {
  let x = [...dots.map((x) => x[0])];
  let y = [...dots.map((y) => y[1])];

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
