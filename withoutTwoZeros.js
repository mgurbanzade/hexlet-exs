const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const iterateOver = (count, digit) => {
  let res = digit;

  if (count === 1 && digit === 0) return '0';

  for (let i = 1; i < count; i += 1) {
    res += `${digit}`;
  }

  return res;
};

const getFactorial = (num) => {
  let res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * (i+1);
  }

  return res;
}

const withoutTwoZeros = (zeros, ones) => {
  let str = iterateOver(zeros, 0) + iterateOver(ones, 1);
  let strings = [];

  for (let i = 0; i < getFactorial(str.length); i++) {
    str = shuffle(str.split('')).join('');

    if (!str.includes('00')) strings.push(str);
  }

  return [...new Set(strings)].length;
};


console.log(withoutTwoZeros(3, 2));
