const getDivisors = (num) => {
  let divisors = [];

  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      divisors.push(i)
    }
  }

  return divisors;
};

const isPerfect = (num) => {
  if (num < 0 || num === 0 || num === NaN) {
    return false;
  }

  let divisors = getDivisors(num);
  let result = 0;

  for (let i = 0; i < divisors.length; i += 1) {
    result += divisors[i];
  }

  return result === num ? true : false;
};


console.log(isPerfect(0));
console.log(isPerfect(496));
