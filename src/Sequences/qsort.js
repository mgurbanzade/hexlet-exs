import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

const qsort = (list) => {
  let arr = [];

  const compare = (a, b) => a > b ? 1 : a < b ? -1 : false;

  const iter = (list) => {
    if (isEmpty(list)) return l();
    arr.push(head(list));
    if (isEmpty(tail(list))) return arr;
    return iter(tail(list));
  };

  iter(list);

  arr = arr.sort(compare);
  let result = l();

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result = cons(arr[i], result);
  }

  return result;
};

export default qsort;

const a = qsort(l());
console.log(listToString(a)) // ()

const b = qsort(l(5, -3, 2, 10, 4, 4, 5));
console.log(listToString(b)) // (-3, 2, 4, 4, 5, 5, 10)

const c = qsort(l(3, 3, 0, -1, 0, 4, -5));
console.log(listToString(c)) // (-5, -1, 0, 0, 3, 3, 4)

const d = qsort(l(5, -3, 2, 10, 4, 3, 5));
console.log(listToString(d)) // (-3, 2, 3, 4, 5, 5, 10)


// const sort = (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }

//   const divisor = head(list);
//   const rest = tail(list);

//   const left = filter(value => value <= divisor, rest);
//   const right = filter(value => value > divisor, rest);

//   return concat(sort(left), cons(divisor, sort(right)));
// };
