const delimiter = '\n';

export const l = (...items) => items.join(delimiter);

const toString = (list) => `(${list})`;
const head = (list) => list.split(delimiter)[0];
const tail = (list) => {
  list = list.split(delimiter);
  list.shift();
  return list.join(delimiter);
}
const isEmpty = (list) => list.length === 0;
const cons = (item, list) => l(item, list);

const filter = (func, list) => {
  if (isEmpty(list)) return l();
  const el = head(list);
  if (!func(el)) return filter(func, tail(list));
  return cons(el, filter(func, tail(list)));
};

const map = (func, list) => {
  if (isEmpty(list)) return l();

  const newElement = func(head(list));
  return cons(newElement, map(func, tail(list)));
};

const reduce = (func, acc, list) => {
  if (isEmpty(list)) {
    return acc;
  }

  return reduce(func, func(head(list), acc), tail(list));
}




// export const head = (list) => {
//   const index = indexOf(list, delimiter);
//   return substr(list, 0, index > -1 ? index : length(list));
// };

// export const tail = (list) => {
//   const index = indexOf(list, delimiter);
//   return index > -1 ? substr(list, index + length(delimiter)) : l();
// };

// export const isEmpty = list => length(list) === 0;

// export const cons = (item, list) => (isEmpty(list) ? item : `${item}${delimiter}${list}`);

// export const reverse = (list) => {
//   const iter = (items, acc) =>
//     (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

//   return iter(list, l());
// };

// export const filter = (test, list) => {
//   const iter = (rest, acc) => {
//     if (isEmpty(rest)) {
//       return acc;
//     }
//     const current = head(rest);
//     return iter(tail(rest), test(current) ? cons(current, acc) : acc);
//   };
//   return reverse(iter(list, l()));
// };

// export const map = (func, list) => {
//   const iter = (rest, acc) => {
//     if (isEmpty(rest)) {
//       return acc;
//     }
//     return iter(tail(rest), cons(func(head(rest)), acc));
//   };
//   return reverse(iter(list, l()));
// };

// export const reduce = (func, init, list) => {
//   const iter = (rest, acc) => {
//     if (isEmpty(rest)) {
//       return acc;
//     }
//     return iter(tail(rest), func(head(rest), acc));
//   };
//   return iter(list, init);
// };

// export const toString = (list) => {
//   const str = reduce((item, acc) => `${acc}, ${item}`, head(list), tail(list));
//   return `(${str})`;
// };
