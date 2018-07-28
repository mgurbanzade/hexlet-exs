import {  l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const has = (list, el) => {
  const iter = (list, el) => {
    if (head(list) === el) return true;
    return isEmpty(tail(list)) ? false : has(tail(list), el);
  };

  return iter(list, el);
};

const reverse = (list) => {
  let result = l();
  if (isEmpty(list)) return result;

  const iter = (list) => {
    result = cons(head(list), result);

    return isEmpty(tail(list)) ? result : iter(tail(list));
  };

  return iter(list);
};

const concat = (l1, l2) => {
  l1 = reverse(l1);
  const iter = (list) => {
    if (isEmpty(list)) return l2;
    l2 = cons(head(list), l2);

    return isEmpty(tail(list)) ? l2 : iter(tail(list));
  };

  return iter(l1);
};

const numbers = l(3, 4, 5, 8);
console.log(has(numbers, 3)) // true
console.log(has(numbers, 8)) // true
console.log(has(numbers, 0)) // false
console.log(has(numbers, 7)) // false

const numbers2 = l(3, 4, 5);
const numbers3 = l(1, 5, 2, 8);
console.log(listToString(reverse(numbers2))) // '(5, 4, 3)'
console.log(listToString(reverse(numbers3))) // '(8, 2, 5, 1)'
console.log(listToString(reverse(l()))) // '()'
console.log(listToString(reverse(l(1)))) // '(1)'
console.log(listToString(reverse(l(1, 2)))) // '(2, 1)'

const numbers4 = l(3, 4, 5, 8);
const numbers5 = l(3, 2, 9);
console.log(listToString(concat(numbers4, numbers5))) // '(3, 4, 5, 8, 3, 2, 9)'
console.log(listToString(concat(numbers4, l()))) // '(3, 4, 5, 8)'
console.log(listToString(concat(l(), numbers5))) // '(3, 2, 9)'


// export const has = (list, element) => {
//   if (isEmpty(list)) {
//     return false;
//   }
//   if (head(list) === element) {
//     return true;
//   }

//   return has(tail(list), element);
// };

// export const reverse = (list) => {
//   const iter = (items, acc) =>
//     (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

//   return iter(list, l());
// };

// export const concat = (list1, list2) => {
//   if (isEmpty(list1)) {
//     return list2;
//   }

//   return cons(head(list1), concat(tail(list1), list2));
// };
