const nrzi = (str) => {
  if (str === '' || str === '|') return '';
  let signal = str.split('');
  let result = [];

  for (let i = 0; i < signal.length; i += 1) {
    if (signal[i] === '|') continue;
    if (signal[i - 1] === '|') {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result.join('');
};

export default nrzi;

const result = nrzi('');
console.log(result) // ''

const result2 = nrzi('|');
console.log(result2) // ''

const result3 = nrzi('¯|__|¯|___|¯¯');
console.log(result3) // '010110010'

const result4 = nrzi('_|¯¯¯|_|¯¯¯¯|_|¯¯');
console.log(result4) // '010011000110'

const result5 = nrzi('¯|___|¯¯¯¯¯|___|¯|_|¯');
console.log(result5) // '010010000100111'

const result6 = nrzi('|¯|___|¯¯¯¯¯|___|¯|_|¯');
console.log(result6) // '110010000100111'


// export default str => str
//   .split('')
//   .map((e, i, arr) => {
//     if (e === '|') {
//       return e;
//     }
//     return i === 0 || e === arr[i - 1] ? 0 : 1;
//   })
//   .filter(e => e !== '|')
//   .join('');
