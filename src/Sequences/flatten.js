import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

const flatten = (list) => {
  let result = l();
  if (isEmpty(list)) return l();

  const f = (el, acc) => {
    if (!isList(el)) return result = cons(el, result);
    return reduce(f, 0, el);
  }

  reduce(f, 0, list);
  return reverse(result);
};

export default flatten;


const a = l();
console.log(listToString(flatten(a))) // '()'

const b = l(1, 2, l(3, 5), l(l(4, 3), 2));
console.log(listToString(flatten(b))) // '(1, 2, 3, 5, 4, 3, 2)'

const c = l(l(1, l(5), l(), l(l(-3, 'hi'))), 'string', 10, l(l(l(5))));
console.log(listToString(flatten(c))) // '(1, 5, -3, hi, string, 10, 5)'


// const flatten = (list) => {
//   const removeList = (elements, accumulator) =>
//     reduce((element, acc) =>
//       (!isList(element) ? cons(element, acc) : removeList(element, acc)), accumulator, elements);

//   return reverse(removeList(list, l()));
// };
