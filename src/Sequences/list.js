import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

const has = (list, el) =>
  (head(list) === el) ? true : (tail(list) === null) ? false : has(tail(list), el);

const reverse = (list) => {

  const iter = (list, acc) => {
    if (isEmpty(list)) return acc;
    return iter(tail(list), cons(head(list), acc));
  }

  return iter(list, l());
};

const concat = (l1, l2) => {
  const list1 = reverse(l1);
  const list2 = l2;

  const iter = (list, acc) => {
    if (isEmpty(list)) return acc;
    return iter(tail(list), cons(head(list), acc));
  }

  return iter(list1, list2);
};

export { has, reverse, concat };


const numbers = l(3, 4, 5, 8);
console.log(has(numbers, 8)); // true
console.log(has(numbers, 0)); // false

const numbers1 = l(3, 4, 5);
console.log(listToString(reverse(numbers))); // (5, 4, 3)


const numbers2 = l(3, 4, 5, 8);
const numbers3 = l(3, 2, 9);
console.log(listToString(concat(numbers2, numbers3))); // (3, 4, 5, 8, 3, 2, 9)
