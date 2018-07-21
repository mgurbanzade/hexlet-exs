const enlargeArrayImage = (arr) => {
  return arr.map(el => {
    el = el.map(el2 => {
      return [el2, el2];
    }).reduce((a, b) => {
      return a.concat(b)
    });

    return [el, el];
  }).reduce((c, d) => {
    return c.concat(d);
  })
};

const arr1 = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

const arr1Enlarged = [
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
];

const arr2 = [
  [' ', ' ', '*', ' ', ' '],
  [' ', '*', ' ', '*', ' '],
  [' ', '*', ' ', '*', ' '],
  ['*', ' ', ' ', ' ', '*'],
  ['*', ' ', ' ', ' ', '*'],
  [' ', '*', ' ', '*', ' '],
  [' ', '*', ' ', '*', ' '],
  [' ', ' ', '*', ' ', ' '],
];

const arr2Enlarged = [
  [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*'],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', '*', '*', ' ', ' ', '*', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '*', '*', ' ', ' ', ' ', ' '],
];

const arr3 = [
  ['@', '@'],
  ['@', '|'],
  ['—', '|'],
  ['@', '|'],
  ['@', '@'],
];

const arr3Enlarged = [
  ['@', '@', '@', '@'],
  ['@', '@', '@', '@'],
  ['@', '@', '|', '|'],
  ['@', '@', '|', '|'],
  ['—', '—', '|', '|'],
  ['—', '—', '|', '|'],
  ['@', '@', '|', '|'],
  ['@', '@', '|', '|'],
  ['@', '@', '@', '@'],
  ['@', '@', '@', '@'],
];

const arr4 = [
  ['x'],
];

const arr4Enlarged = [
  ['x', 'x'],
  ['x', 'x'],
];

const result1 = enlargeArrayImage(arr1);
console.log(result1) // arr1Enlarged

const result2 = enlargeArrayImage(arr2);
console.log(result2) // arr2Enlarged

const result3 = enlargeArrayImage(arr3);
console.log(result3) // arr3Enlarged

const result4 = enlargeArrayImage(arr4);
console.log(result4) // arr4Enlarged

// with helper function
// const duplicateEachItemInArray = arr => _.flatten(arr.map(item => [item, item]));

// const enlargeArrayImage = (arr) => {
//   const horizontallyStretched = arr.map(duplicateEachItemInArray);
//   return duplicateEachItemInArray(horizontallyStretched);
// };
