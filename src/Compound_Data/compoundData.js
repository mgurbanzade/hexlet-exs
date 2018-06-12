const cons = (x, y) => (2 ** x) * (3 ** y);
let pair1 = cons(5, 8);

const car = (pair) => {
  let x = 0;
  const findRes = (num) => Number.isInteger((num / 3) / 3) ? findRes(num / 3) : num / 3;
  const findCar = (x) => 2 ** x < findRes(pair) ? findCar(x+1) : x;

  return findCar(x);
};

const cdr = (pair) => {
  let y = 0;
  const findRes = (num) => Number.isInteger((num / 2) / 2) ? findRes(num / 2) : num / 2;
  const findCdr = (y) => 3 ** y < findRes(pair) ? findCdr(y+1) : y;

  return findCdr(y);
};

console.log(car(pair1))
console.log(cdr(pair1))
