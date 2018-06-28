// eslint-disable-next-line
import { l, length, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, make, node, toString as htmlToString, append, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

const select = (tag, dom) => {
  let arr = l();

  const iter = (tag, dom) => {
    const f = (el, acc) => {
      if (typeof el === 'string') return false;
      if (is(tag, el)) arr = append(arr, el);
      if (isList(el)) return iter(tag, el);
    }

    reduce(f, 0, dom);
    return arr;
  }

  return iter(tag, dom);
};
// END

export default select;


const dom1 = make();
const children1 = l(node('a', l(node('span', 'scheme'))));
const dom2 = append(dom1, node('h1', children1));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children2));
const children3 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children3));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children4 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children4));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));


console.log(length(select('span', dom))) // 2
console.log(length(select('section', dom))) // 0
console.log(length(select('li', dom))) // 5
console.log(length(select('p', dom))) // 5
console.log(length(select('h1', dom))) // 2
console.log(length(select('div', dom))) // 3



// const select = (tagName, html) => reduce((element, acc) => {
//   const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//   return is(tagName, element) ? consList(element, acc2) : acc2;
// }, l(), html);
