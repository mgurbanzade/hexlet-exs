import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

const make = () => l();
const node = (name, content) => cons(name, content);
const name = tag => car(tag);
const value = tag => cdr(tag);
const append = (list, node) => consList(node, list);
const toString = (node) => {
  if (isEmpty(node)) return '';

  const iter = (dom, res) => {
    let tag = name(head(dom));
    let val = value(head(dom));
    res = `<${tag}>${val}</${tag}>` + res;

    return isEmpty(tail(dom)) ? res : iter(tail(dom), res);
  };

  return iter(node, '');
}

export { make, node, name, value, append, toString };
