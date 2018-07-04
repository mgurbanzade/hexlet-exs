const cons = (x, y) => (2 ** x) * (3 ** y);
const pair1 = cons(5, 8);

const car = (pair) => {
  const x = 0;
  const findRes = (num) => {
    if (Number.isInteger((num / 3) / 3)) return findRes(num / 3);
    return num / 3;
  };

  const findCar = (num) => {
    if (2 ** num < findRes(pair)) return findCar(num + 1);
    return num;
  };

  return findCar(x);
};

const cdr = (pair) => {
  const y = 0;
  const findRes = (num) => {
    if (Number.isInteger((num / 2) / 2)) return findRes(num / 2);
    return num / 2;
  };

  const findCdr = (num) => {
    if (3 ** num < findRes(pair)) return findCdr(num + 1);
    return num;
  };

  return findCdr(y);
};

console.log(car(pair1));
console.log(cdr(pair1));
