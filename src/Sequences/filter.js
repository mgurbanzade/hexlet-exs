import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, name, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

export const filter = (func, list) => {
  if (isEmpty(list)) return l();
  const el = head(list);
  if (!func(el)) return filter(func, tail(list));
  return cons(el, filter(func, tail(list)));
};

export const quotes = (dom) => {
  const filteredDom = filter(element => is('blockquote', element), dom);
  let quotesList = make();

  const iter = (filteredDom) => {
    if (isEmpty(filteredDom)) return quotesList;
    quotesList = append(quotesList, value(head(filteredDom)));
    if (isEmpty(tail(filteredDom))) return quotesList;
    return iter(tail(filteredDom));
  }

  return reverse(iter(filteredDom));
};


// export const filter = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     const item = head(items);
//     const newAcc = func(item) ? cons(item, acc) : acc;
//     return iter(tail(items), newAcc);
//   };

//   return iter(elements, l());
// };

// export const quotes = (elements) => {
//   const filtered = filter(element => is('blockquote', element), elements);
//   const result = map(value, filtered);
//   return result;
// };
