import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, list) => {
  let res = l();

  const iter = (list) => {
    if (isEmpty(list)) return res;
    if (func(head(list))) res = cons(head(list), res);
    return iter(tail(list));
  };

  return reverse(iter(list));
};

export const quotes = (html) => {
  let pr = filter(el =>
    is('blockquote', el), html);

  return map(value, pr);
};


// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
