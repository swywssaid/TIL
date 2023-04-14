function solution(input_string) {
  const frequency = new Map();
  const lonelyAlphabets = [];

  input_string.split("").forEach((alphabet) => {
    const currentCount = frequency.get(alphabet) || 0;
    frequency.set(alphabet, currentCount + 1);
  });

  frequency.forEach((count, alphabet) => {
    if (input_string.lastIndexOf(alphabet) - input_string.indexOf(alphabet) !== count - 1) {
      lonelyAlphabets.push(alphabet);
    }
  });

  return lonelyAlphabets.sort().join("") || "N";
}

/*
1.객체 대신 Map을 사용하여 알파벳의 출현 빈도수를 저장합니다.
2.for...in 대신 Map의 forEach 메서드를 사용하여 외톨이 알파벳을 찾습니다.
3.변수명을 좀 더 직관적으로 바꿉니다.

객체의 키로 사용할 수 있는 값은 문자열과 심볼(symbol)만 가능합니다. 
하지만 Map 객체를 사용하면 다른 타입의 값도 키로 사용할 수 있습니다. 
예를 들어, 객체에서는 숫자를 키로 사용할 수 없지만 Map 객체에서는 숫자를 키로 사용할 수 있습니다. 
따라서 Map 객체를 사용하면 객체보다 더 다양한 타입의 값들을 키로 사용할 수 있습니다.
*/
