const sumSquareDifference = (n) => {

  const squareOfSum = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i += 1) {
      sum += i;
    }

    return sum ** 2;
  }

  const sumOfSquare = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i += 1) {
      sum += i ** 2;
    }

    return sum;
  }

  return squareOfSum(n) - sumOfSquare(n);
}

console.log(sumSquareDifference(10));
