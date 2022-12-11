function solution(polynomial) {
  let ports = polynomial.split(" + ");
  let [x, c] = [0, 0];
  ports.forEach((port) => (port.includes("x") ? (x += port.length === 1 ? 1 : Number(port.slice(0, port.length - 1))) : (c += Number(port))));
  return x === 0 ? c.toString() : c === 0 ? (x === 1 ? "x" : x + "x") : x === 1 ? "x + " + c : x + "x + " + c;
}
// solution("x" + " + 2x".repeat(40));
// solution("1 + x");
solution("x");

/*
1. + split
2. x 있으면 split

*/
