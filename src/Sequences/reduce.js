import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

export const reduce = (func, acc, dom) => {
  if (isEmpty(dom)) return acc;
  const el = head(dom);
  const newAcc = func(el, 0) ? acc + 1 : acc;
  if (func(el, 0)) return reduce(func, newAcc, tail(dom));
  return reduce(func, newAcc, tail(dom));
};

export const emptyTagsCount = (tag, dom) => {
  const f = ((element, acc) => is(tag, element) ? value(element) === '' : false);
  return reduce(f, 0, dom);
};

// export const reduce = (func, acc, elements) => {
//   if (isEmpty(elements)) {
//     return acc;
//   }

//   return reduce(func, func(head(elements), acc), tail(elements));
// };

// export const emptyTagsCount = (tagName, elements) => {
//   const predicate = element => is(tagName, element) && value(element) === '';
//   const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
//   return reduce(func, 0, elements);
// };
