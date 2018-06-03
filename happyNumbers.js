const sumOfSquareDigits = (n) => {
  let sum = 0;
  let num = String(n).split('');

  for (let i = 0; i < num.length; i += 1) {
    sum += parseInt(num[i]) ** 2;
  }

  return sum;
}

const isHappyNumber = (n) => {
  let res = n;

  for (let i = 0; i < 10; i += 1) {
    res = sumOfSquareDigits(res);
  }

  return res === 1 ? true : false;
}

console.log(isHappyNumber(7));
