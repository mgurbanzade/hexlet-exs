import { l, isEmpty, reverse, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';


const take = (count, list) => {
  let result = l();
  if (isEmpty(list)) return result;

  const iter = (count, list) => {
    result = cons(head(list), result);
    if (count - 1 === 0 || isEmpty(tail(list))) return result;
    return iter(count - 1, tail(list));
  };

  return reverse(iter(count, list));
};

export default take;


console.log(listToString(take(3, l()))) // ()

console.log(listToString(take(3, l(1, 2)))) // 1, 2

console.log(listToString(take(1, l('op', 'hop')))) // 'op'


// const take = (count, list) => {
//   if (isEmpty(list) || count === 0) {
//     return l();
//   }

//   return cons(head(list), take(count - 1, tail(list)));
// };
