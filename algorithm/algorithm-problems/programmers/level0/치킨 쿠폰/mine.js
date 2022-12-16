function solution(chicken) {
  const cntCoupon = (coupon, service) => {
    service += Math.floor(coupon / 10);
    return coupon >= 10 ? cntCoupon(Math.floor(coupon / 10) + (coupon % 10), service) : service;
  };
  return cntCoupon(chicken, 0);
}
/*
1. 서비스 치킨
2. 서비스 치킨을 통한 치킨
재귀...
109
10 9 --> 10
1 9 --> 1
1 --> 1

109 / 12

10
1

*/
