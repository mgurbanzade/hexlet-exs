import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

// helper functions
export const identity = word => word;

// wc(word, text)
export const wc = (word, text) => {
  const re = new RegExp(word, 'g');
  return (text.match(re) || []).length;
};

export const extractHeaders = (html) => {
  const filtered = filter(el => is('h2', el), html);
  return map(el => node('p', value(el)), filtered);
};

export const wordsCount = (tag, word, list) => {
  const filtered = filter(el => is(tag, el), list);
  const mapped = map(el => value(el), filtered);
  return wc(word, listToString(mapped));
};
