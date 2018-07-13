const setDifference = (set1, set2) =>
  new Set(Array.from(set1).filter(el => !set2.has(el)));

export default setDifference;

const result1 = setDifference(new Set([2, 1]), new Set([2, 3]));
console.log(result1) // Set(1) {1}

const result2 = setDifference(new Set([]), new Set([2, 3]));
console.log(result2) // Set(0) {}

const result3 = setDifference(new Set([2, 1]), new Set([]));
console.log(result3) // Set(2) {2, 1}
