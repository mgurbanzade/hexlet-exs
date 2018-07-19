const findOdd = (arr) => {
  const prepareResult = arr.map(el1 => {
    return arr.filter(el2 => el2 === el1);
  });
  const result = prepareResult.filter(el => el.length % 2 !== 0);
  return result[0][0];
};

export default findOdd;

const numbers = [1, 2, 5, 2, 3, 5, 1, 7, 3];
console.log(findOdd(numbers)) // 7

const numbers2 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(numbers2)) // 5

const numbers3 = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];
console.log(findOdd(numbers3)) // -1

// export default arr => arr.reduce((acc, num) => acc ^ num, 0);
