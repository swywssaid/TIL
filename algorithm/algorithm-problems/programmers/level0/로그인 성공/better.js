function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}

/*
js map은 tree map(ordered map)으로 hash map(unordered map)과 차이가 있다.
In JavaScript, the time complexity of Map depends on the operation being performed. For operations like get(), has(), and delete(), the time complexity is O(1), which means it can be done in constant time. This means that the time taken by these operations does not depend on the size of the Map object.

However, for operations like set() and clear(), the time complexity is O(n), where n is the number of elements in the Map object. This means that the time taken by these operations increases linearly with the size of the Map object.

Overall, Map is an efficient data structure for performing operations that require fast access to elements, but it may not be the best choice for operations that require frequent insertion or deletion of elements.
*/
