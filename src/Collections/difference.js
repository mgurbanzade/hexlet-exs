const difference = (arr1, arr2) =>
  arr1.filter((el) => !arr2.includes(el))

export default difference;


const result1 = difference([2, 1], [2, 3]);
console.log(result1) // [1]

const result2 = difference([], [2, 3]);
console.log(result2) // []

const result3 = difference([2, 1], []);
console.log(result3) // [2, 1]
