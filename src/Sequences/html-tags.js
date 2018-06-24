import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

const make = () => l();
const node = (tag, content) => cons(tag, content);
const name = (nd) => car(nd);
const value = (nd) => cdr(nd);
const append = (dom, nd) => consList(nd, dom);

const reverse = (list) => {

  const iter = (list, acc) => {
    if (isEmpty(list)) return acc;
    return iter(tail(list), cons(head(list), acc));
  }

  return iter(list, l());
};

// toString of junkie (me)
const toString = (dom) => {
  if (isEmpty(dom)) return '';
  dom = reverse(dom);
  let elements = [];

  const iterList = (list, acc) => {
    elements.push(head(list));
    if (isEmpty(tail(list))) return elements;
    return iterList(tail(list), cons(head(list), acc));
  }

  iterList(dom, l());

  let result = '';

  for (let i = 0; i < elements.length; i++) {
    const tag = name(elements[i]);
    const content = value(elements[i]);

    result += `<${tag}>${content}</${tag}>`;
  };

  return result;
}
// END

export { make, node, name, value, append, toString }


// toString of normal people
// const toString = (elements) => {
//   if (isEmpty(elements)) {
//     return '';
//   }
//   const element = head(elements);
//   const tag = name(element);
//   return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
// };
