import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
import { make, append, node, is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

const select = (tagName, html) => {
  return reduce((el, acc) => {
    if (is(tagName, el)) acc = concat(acc, l(el));
    if (hasChildren(el)) acc = concat(acc, select(tagName, children(el)));
    return acc;
  }, l(), html);
};

export default select;
