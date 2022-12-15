function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);

  if (!db.length) return "fail";

  for (let d of db) if (d[1] === id_pw[1]) return "login";

  return "wrong pw";
}

/*
이전 상태를 기억할 필요가 없다.

*/
