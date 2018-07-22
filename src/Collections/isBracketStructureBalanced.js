const isBracketStructureBalanced = (str) => {
  if (str === '') return true;
  if (str.length < 2) return false;
  str = str.split('');
  let brackets = [['<', '>'], ['(', ')'], ['[', ']'], ['{', '}']];

  const check = (symbols) => {
    return str.reduce((acc, el) => {
      const first = str.filter(el => el === symbols[0]);
      const last = str.filter(el => el === symbols[1]);
      return first.length === last.length;
    })
  }

  let res = [];

  for (let i in brackets) {
    res.push(check(brackets[i]));
  };

  return res.filter(el => el === false).length > 0 ? false : true;
};

export default isBracketStructureBalanced;

const str = '()';
console.log(isBracketStructureBalanced(str)) // true

const str2 = '[()]';
console.log(isBracketStructureBalanced(str2)) // true

const str3 = '({}[])';
console.log(isBracketStructureBalanced(str3)) // true

const str4 = '(<><<{[()]}>>)';
console.log(isBracketStructureBalanced(str4)) // true

const str5 = '';
console.log(isBracketStructureBalanced(str5)) // true

const str6 = '((';
console.log(isBracketStructureBalanced(str6)) // false

const str7 = '[[()]';
console.log(isBracketStructureBalanced(str7)) // false

const str8 = '({}}[])';
console.log(isBracketStructureBalanced(str8)) // false

const str9 = '(<><<{[()]}>>>)';
console.log(isBracketStructureBalanced(str9)) // false

const str10 = '}';
console.log(isBracketStructureBalanced(str10)) // false



// const brackets = new Map([
//   ['(', ')'],
//   ['[', ']'],
//   ['{', '}'],
//   ['<', '>'],
// ]);

// const isOpeningSymbol = symbol => brackets.has(symbol);

// const getClosingSymbolFor = symbol => brackets.get(symbol);

// const isStackEmpty = stack => (stack.length === 0);

// export default (str) => {
//   const stack = [];
//   for (const symbol of str) {
//     if (isOpeningSymbol(symbol)) {
//       const closingSymbol = getClosingSymbolFor(symbol);
//       stack.push(closingSymbol);
//     } else {
//       if (isStackEmpty(stack)) {
//         return false;
//       }

//       const last = stack.pop();

//       if (symbol !== last) {
//         return false;
//       }
//     }
//   }

//   return isStackEmpty(stack);
// };
