import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

const sameParity = (list) => {
  if (isEmpty(list)) return list;
  const first = Math.abs(head(list));
  return filter(el => Math.abs(el) % 2 === first % 2, list)
};

// const sameParity = (list) => {
//   let isEven = (el) => el % 2 === 0;
//   return filter((el) => isEven(el) === isEven(head(list)), list);
// };
export default sameParity;
