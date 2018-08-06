import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
// import { reverse as reverseStr } from './strings';

export const map = (func, list) => {
  let res = l();

  const iter = (list) => {
    if (isEmpty(list)) return res;
    res = cons(func(head(list)), res);
    return iter(tail(list));
  };

  return reverse(iter(list));
};

