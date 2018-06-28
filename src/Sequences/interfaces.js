import { toString as listToString, head } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, make, name, append, is, toString as htmlToString, map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

// import { wc } from './utils'; // eslint-disable-line

export const extractHeaders = (dom) => {
  const headersList = filter((tag) => is('h2', tag), dom);
  const content = map(value, headersList);
  return map((text) => node('p', text), content);
};

export const wordsCount = (tag, word, dom) => {
  let count = 0;
  const f = (el, acc) => is(tag, el) ? count += wc(word, value(el)) : 0;
  const filteredDom = reduce(f, 0, dom);
  return count;
};

// export const extractHeaders = (elements) => {
//   const filtered = filter(element => is('h2', element), elements);
//   return map(element => node('p', value(element)), filtered);
// };

// export const wordsCount = (tagName, word, elements) => {
//   const filtered = filter(element => is(tagName, element), elements);
//   const values = map(element => value(element), filtered);
//   return reduce((text, acc) => wc(word, text) + acc, 0, values);
// };
