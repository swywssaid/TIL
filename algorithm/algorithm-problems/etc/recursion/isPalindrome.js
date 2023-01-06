// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str) {
  // 처음과 마지막 문자가 다르면 false
  // 양끝 제외한 데이터 재귀
  // 입력값 1 이하면 true

  if (str.length <= 1) return true;
  return str[0] !== str[str.length - 1] ? false : isPalindrome(str.slice(1, -1));
}

/*
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
*/
