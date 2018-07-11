const uniq = (arr) => {
  const newArr = [];
  arr.filter((el) => !newArr.includes(el) ? newArr.push(el) : newArr);
  return newArr;
};

export default uniq;


console.log(uniq([])) // []
console.log(uniq([2, 1])) // [2, 1]
console.log(uniq([2, 1, 2, 3])) // [2, 1, 3]
console.log(uniq([-2, 20, 0, 4, 20, 0])) // [-2, 20, 0, 4]


// export default coll => coll.reduce((acc, value) =>
//   (acc.includes(value) ? acc : acc.concat(value)), []);
