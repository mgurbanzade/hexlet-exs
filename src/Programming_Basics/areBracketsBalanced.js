const areBracketsBalanced = (str) => {
  let input = str.split('');
  let left = 0;
  let right = 0;

  const iter = (arr, i) => {
    if (arr[i] === '(') left += 1;
    if (arr[i] === ')') right += 1;
    if (arr[0] === ')' || arr[arr.length - 1] === '(') return false;
    return i < arr.length ? iter(arr, i + 1) : arr;
  };

  iter(input, 0);
  return left === right;
};

export default areBracketsBalanced;

const str1 = '()';
console.log(areBracketsBalanced(str1)) // true

const str2 = '(())';
console.log(areBracketsBalanced(str2)) // true

const str3 = '(()((((())))))';
console.log(areBracketsBalanced(str3)) // true

const str4 = '';
console.log(areBracketsBalanced(str4)) // true

const str5 = '((';
console.log(areBracketsBalanced(str5)) // false

const str6 = '())(';
console.log(areBracketsBalanced(str6)) // false

const str7 = '((())';
console.log(areBracketsBalanced(str7)) // false

const str8 = '(())())';
console.log(areBracketsBalanced(str8)) // false

const str9 = '(()(()))))';
console.log(areBracketsBalanced(str9)) // false

const str10 = ')';
console.log(areBracketsBalanced(str10)) // false


// export default (str) => {
//   let acc = 0;
//   for (let i = 0; i < length(str); i += 1) {
//     const symbol = str[i];
//     acc = symbol === '(' ? acc + 1 : acc - 1;
//     if (acc < 0) {
//       return false;
//     }
//   }
//   return acc === 0;
// };
