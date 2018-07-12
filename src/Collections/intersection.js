const intersection = (arr1, arr2) => {
  let newArr = [];

  arr1.map((el) => {
    if (arr2.includes(el) && !newArr.includes(el)) newArr.push(el)
  });

  return newArr;
};

export default intersection;

const result = intersection([], []);
console.log(result) // []

const result2 = intersection([2, 1], [0, 5, 2]);
console.log(result2) // [2]

const result3 = intersection([3, 1, 3], [3, 3, 2]);
console.log(result3) // [3]

const result4 = intersection([2, 1, 2], [2, 3]);
console.log(result4) // [2]

const result5 = intersection([10, 100, 0, 234, 'hello'], [234, 432, 10, 'str', 0]);
console.log(result5) // [10, 0, 234]

const result6 = intersection(
  ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
  ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
);

console.log(result6) // ['kirill', 'rakhim', 'alex', 'dima']
