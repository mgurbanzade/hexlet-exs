const chunk = (arr, size) => {
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  };

  return res;
};

export default chunk;

const result1 = chunk(['a', 'b', 'c', 'd'], 2);
console.log(result1) // [['a', 'b'], ['c', 'd']]

const result2 = chunk(['a', 'b', 'c', 'd'], 3);
console.log(result2) // [['a', 'b', 'c'], ['d']]

const result3 = chunk([], 4);
console.log(result3) // []

const result4 = chunk(['a'], 2);
console.log(result4) // [['a']]

const result5 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
console.log(result5) // [['a', 'b'], ['c', 'd'], ['e', 'f']]


// export default (coll, size) => {
//   const iter = (iterColl, acc = []) => {
//     if (iterColl.length === 0) {
//       return acc;
//     }
//     return iter(
//       iterColl.slice(size),
//       [...acc, iterColl.slice(0, size)],
//     );
//   };

//   return iter(coll);
// };
