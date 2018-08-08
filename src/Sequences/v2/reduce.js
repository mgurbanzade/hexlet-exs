import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, acc, list) => {
  const iter = (elements, acc) => {
    if (isEmpty(elements)) return acc;
    const newAcc = func(head(elements), acc);
    return iter(tail(elements), newAcc);
  };

  return iter(list, acc);
};

export const emptyTagsCount = (tag, dom) => {
  return reduce((el, acc) => {
    if (is(tag, el)) {
      return value(el) === '' ? acc + 1 : acc;
    }

    return acc;
  }, 0, dom)
};
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
