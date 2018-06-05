const reverseInt = (int) => {
  let str = String(int);
  const isNegative = str[0] === '-';

  const reverseRegularString = str.split('').reverse().join('');

  if (isNegative) {
    str = str.split('');
    str.shift();
    str.push('-');
    str = str.reverse().join('');

    return parseInt(str);
  }

  return parseInt(reverseRegularString);
}

console.log(reverseInt(-12346));
