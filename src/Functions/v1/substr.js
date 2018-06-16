const substr = (str, start = 0, length = str.length) => {
  if (length < 0) length = 1;
  if ((start >= str.length) || (str === '') || (length === 0)) return '';
  if (start + length >= str.length) length = length - ((start+length) - str.length);
  if (start < 0) start = 0;

  let result = '';

  for(let i = start; i <= length; i++) {
    if (result.length < length && str[i] !== undefined) result += `${str[i]}`;
  }

  return result;
};

console.log(substr('abba', 1, 2));    // => bb

