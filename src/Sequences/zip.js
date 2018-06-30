import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data';

const zip = (l1, l2) => {
  let result = l();
  if (isEmpty(l1) || isEmpty(l2)) return result;

  const iter = (l1, l2) => {
    result = cons(l(head(l1), head(l2)), result);
    if (isEmpty(tail(l1)) || isEmpty (tail(l2))) return result;
    return iter(tail(l1), tail(l2));
  };

  return reverse(iter(l1, l2));
};


export default zip;


const li1 = l(1, 5, 3, 8, 9);
const li2 = l(2, 3, 2, 1);

const res = zip(li1, li2);
console.log(listToString(res)) // '((1, 2), (5, 3), (3, 2), (8, 1))'



// const zip = (list1, list2) => {
//   const iter = (first, last, acc) => {
//     if (isEmpty(first) || isEmpty(last)) {
//       return acc;
//     }

//     const newAcc = cons(l(head(first), head(last)), acc);
//     return iter(tail(first), tail(last), newAcc);
//   };

//   return reverse(iter(list1, list2, l()));
// };
