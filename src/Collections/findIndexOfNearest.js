const findIndexOfNearest = (arr, num) => {
  if (arr.length === 0) return null;
  const exactMatch = arr.filter(el => el === num);
  if (exactMatch.length > 0) return arr.indexOf(exactMatch[0]);

  const indicesAndDifference = arr.map(el =>
    [arr.indexOf(el), Math.abs(num - el)]);

  let difference = indicesAndDifference.map(el => el[1]);

  let res = indicesAndDifference.map(el => {
    if (el[1] === Math.min.apply(null, difference)) return el[0];
  }).filter(el => el !== undefined);

  return Math.min.apply(null, res);
};

export default findIndexOfNearest;

console.log(findIndexOfNearest([], 2)) // null;
console.log(findIndexOfNearest([10], 0)) // (0);
console.log(findIndexOfNearest([10, 15], 0)) // (0);
console.log(findIndexOfNearest([15, 10], 0)) // (1);
console.log(findIndexOfNearest([15, 10], 12)) // (1);
console.log(findIndexOfNearest([15, 10, 3, 4], 0)) // (2);
console.log(findIndexOfNearest([7, 5, 3, 2], 4)) // (1);
console.log(findIndexOfNearest([7, 5, 4, 4, 3, 6], 4)) // (2);

// export default (arr, num) => {
//   if (arr.length === 0) {
//     return null;
//   }
//   return arr.reduce((currIndex, e, i) =>
//     (Math.abs(e - num) < Math.abs(arr[currIndex] - num) ? i : currIndex), 0);
// };
