function solution(id_pw, db) {
  let status = "fail";
  db.forEach((x) => {
    status = x[0] === id_pw[0] ? (x[1] === id_pw[1] ? "login" : "wrong pw") : status !== "fail" ? status : "fail";
  });
  return status;
}

/*
아이디 같고 실팩가 아닐때(login, pw, "") 트루
아이디 다르거나 실패일 때 거짓.

요소를 찾는 것이여서 배열을 사용하면 느림.
모든 요소를 확인하며 체크해야함.
O(n)
*/
