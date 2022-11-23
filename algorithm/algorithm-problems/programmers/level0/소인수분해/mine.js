function getPrimeFactor(n) {
  let answer = [];
  let divider = 2;
  while (n != 1) {
    if (n % divider === 0) {
      answer.push(divider);
      n /= divider;
    } else {
      divider++;
    }
  }
  return console.log([...new Set(answer)]);
}
getPrimeFactor(10000);
