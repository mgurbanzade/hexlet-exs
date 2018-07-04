import { length, l, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
import { make, append, node, is, toString as htmlToString, hasChildren, children, reduce } from 'hexlet-html-tags';

const stringifyTags = (tags, str) => {
  return reduce((el, acc) => el ? str += `<${el}>` : str , 0, tags);
}

const getPrimaryTags = (tags, dom, result) => {
  return reduce((el, acc) => {
    if (htmlToString(l(el)).includes(tags)) {
      result = concat(result, l(el));
    }
    return result;
  }, 0, dom)
};

const select = (tags, dom) => {
  let lastTag = reduce((el, acc) =>
    acc === length(tags) ? el : el, 0, tags);

  const stringTags = stringifyTags(tags, "")
  const primaryTags = getPrimaryTags(stringTags, dom, l());

  let finalResult = l();

  const getLastElement = (tag, dom, result) => {
    return reduce((el, acc1) => {
      if (is(tag, el)) {
        finalResult = concat(finalResult, l(el));
      }

      if (hasChildren(el)) return getLastElement(tag, children(el), result)

      return finalResult;
    }, 0, dom);
  };

  return getLastElement(lastTag, primaryTags, l());
};

export default select;

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('p', l(node('ul', children1))));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('div', l(node('a', l(node('div', l(node('p', l(node('span', 'text'))))))))));
const dom11 = append(dom10, node('h1', 'prolog'));
const dom = append(dom11, node('p', 'is about logic'));

console.log(length(select(l('p', 'ul', 'li'), dom))) // 2;
console.log(length(select(l('div', 'div', 'p'), dom))) // 1;
console.log(length(select(l('div', 'p'), dom))) // 3;
console.log(length(select(l('div', 'a'), dom))) // 1;
console.log(length(select(l('ul'), dom))) // 2;
console.log(length(select(l('div'), dom))) // 5;



// const select = (query, fullHtml) => {
//   const iter = (subquery, html, insideQuery = false) => {
//     if (isEmpty(subquery)) {
//       return html;
//     }

//     const restOfQuery = tail(subquery);

//     const newHtml = reduce((element, acc) => {
//       const childrenElements = hasChildren(element) ? children(element) : l();
//       if (is(head(subquery), element)) {
//         const elementsList = isEmpty(restOfQuery) ? l(element) : childrenElements;
//         const elements = insideQuery ?
//           elementsList : concat(iter(subquery, childrenElements), elementsList);
//         return concat(elements, acc);
//       } else if (hasChildren(element) && !insideQuery) {
//         return concat(iter(subquery, childrenElements), acc);
//       }
//       return acc;
//     }, l(), html);

//     return iter(restOfQuery, newHtml, true);
//   };

//   return iter(query, fullHtml);
// };
