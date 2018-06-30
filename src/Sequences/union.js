import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

const union = (l1, l2) => {
  let result = l();
  const f = (el, acc) => !has(result, el) && !has(result, l2) ? result = cons(el, result) : false;
  reduce(f, 0, l1);

  const f2 = (el, acc) => !has(result, el) ? result = cons(el, result) : false;
  reduce(f2, 0, l2);

  return reverse(result);
};

export default union;

const list1 = l(1, 5, 3, 5, 8, 9);
const list2 = l(2, 3, 2, 1, 7);

console.log(listToString(union(list1, list2))) // 1, 5, 3, 8, 9, 2, 7


// const appendUniq = (base, list) => {
//   const result = reduce(
//     (value, acc) => (has(acc, value) ? acc : cons(value, acc)),
//     reverse(base),
//     list,
//   );
//   return reverse(result);
// };
