const substr = (str, start = 0, length = str.length) => {
  if (length < 0) length = 1;
  if ((start >= str.length) || (str === '') || (length === 0)) return '';
  if (start + length >= str.length) length = str.length - start;
  if (start < 0) start = 0;
  let result = str[start];

  for (let i = start + 1; i <= length; i += 1) {
    if (result.length < length && str[i] !== undefined) result = `${result}${str[i]}`;
  }

  return result;
};

console.log(substr(''));     // => ''
console.log(substr('abba')); // => abba
console.log(substr('abba', 0, 1));    // => a
console.log(substr('abba', 1, 2));    // => bb
console.log(substr('abba', -10, 2));  // => ab
console.log(substr('abba', -1, 100)); // => abba
console.log(substr('abba', -1, -1));  // => a
console.log(substr('abba', 1, -10));  // => b
console.log(substr('abba', 1, 10));   // => bba
console.log(substr('abba', 1, 0));    // => ''
console.log(substr('abba', 100, 3));  // => ''
