# Transaction

## 트랜잭션(Transaction)
- 쪼갤 수 없는 업무 처리의 최소 단위
- 데이터베이스에서 여러 개의 쿼리문을 논리적인 작업 단위로 묶어서 처리하는 것이다.

<br><br>

## 트랜잭션 목적
- 데이터베이스 서버에 여러 개의 클라이언트가 동시에 액세스 하거나 응용프로그램이 갱신을 처리하는 과정에서 중단될 수 있는 경우 등 데이터 부정합을 방지하고자 할 때 사용한다.

<br><br>

## 트랜잭션 특징
1. 원자성(Atomicity)
   - 트랜잭션 내의 모든 쿼리문은 전부 성공해야만 성공으로 간주됩니다. 하나라도 실패하면 이전 상태로 되돌려지는 롤백(Rollback) 작업이 수행됩니다.
2. 일관성(Consistency)
   - 트랜잭션이 실행되기 전과 실행된 후에도 데이터베이스의 일관성이 유지되어야 합니다.
3. 격리성(Isolation)
   - 여러 개의 트랜잭션이 동시에 실행되더라도, 각각의 트랜잭션은 서로 독립적으로 실행되는 것처럼 보여야 합니다.
4. 지속성(Durability)
   - 트랜잭션이 성공적으로 완료되면, 그 결과가 영구적으로 데이터베이스에 저장되어야 합니다.

<br><br>

## 트랜잭션 사용 방법
1. 트랜잭션 시작(START TRANSACTION)
   - 트랜잭션이 시작됩니다.
2. 쿼리문 실행
   - 여러 개의 쿼리문이 실행됩니다.
3. 트랜잭션 완료(COMMIT)
   - 모든 쿼리문이 성공하면, COMMIT 명령을 사용하여 트랜잭션을 완료합니다.
   - 하나 이상의 쿼리문이 실패하면, ROLLBACK 명령을 사용하여 트랜잭션을 취소합니다.

<br>

```sql
START TRANSACTION; -- 트랜잭션 시작

INSERT INTO users (name, age) VALUES ('John', 25); -- 쿼리문 1
UPDATE users SET age=26 WHERE name='John'; -- 쿼리문 2
DELETE FROM users WHERE name='Jane'; -- 쿼리문 3

COMMIT; -- 모든 쿼리문이 성공했을 때, 트랜잭션 완료

```

> 단, MySQL에선 기본 스토리지 엔진으로 innoDB를 사용하고 있고, innoDB는 기본으로 트랜젝션이 적용된다.

<br><br>

## Reference
[트랜잭션](http://wiki.hash.kr/index.php/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98)