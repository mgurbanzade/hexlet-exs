import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

const sameParity = (list) => {
  let isEven = (el) => el % 2 === 0;
  return filter((el) => isEven(el) === isEven(head(list)), list);
};


export default sameParity;

const result2 = sameParity(l(2, 0, 1, -3, 10, -2));
console.log(listToString(result2)) // (2, 0, 10, -2);

const result3 = sameParity(l(-1, 0, 1, -3, 10, -2));
console.log(listToString(result3)) // (-1, 1, -3)


// export default (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }

//   const first = head(list);

//   return filter(value => Math.abs(first % 2) === Math.abs(value % 2), list);
// };
