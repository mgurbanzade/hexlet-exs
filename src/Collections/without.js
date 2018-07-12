const without = (arr, ...elements) =>
  arr.filter((el) => !elements.includes(el));

export default without;

const result = without([], 1, 2, 5);
console.log(result) // []

const result1 = without([2, 1, 2, 3], 1, 2, 5);
console.log(result1) // [3]

const result2 = without([10, 'str', -3, 'world', 'hello', ''], 'hello', -3);
console.log(result2) // [10, 'str', 'world', '']
