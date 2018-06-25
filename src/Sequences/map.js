import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, append, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const map = (func, list) => {
  if (isEmpty(list)) return l();

  const newElement = func(head(list));
  return cons(newElement, map(func, tail(list)));
};

const reverseStr = str => str.split('').reverse().join('');

export const mirror = (dom) => {
  if (isEmpty(dom)) return '';
  let result = l();

  const iter = (dom) => {
    let tag = name(head(dom));
    let content = reverse(value(head(dom)));

    result = append(result, node(tag, content));

    if (isEmpty(tail(dom))) return result;
    return iter(tail(dom));
  };

  return iter(dom)
};


// export const map = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     return iter(tail(items), cons(func(head(items)), acc));
//   };

//   return iter(elements, l());
// };

// export const mirror = elements =>
//   map(element => node(name(element), reverseStr(value(element))), elements);
