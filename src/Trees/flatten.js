const flatten = (arr) => {
  if (arr.length === 0) return arr;

  return arr.reduce((acc, el) => {
    if (typeof el === 'object') {
      if (el.length === 0) return acc;
      return acc.concat(flatten(el));
    }

    return [...acc, el];
  }, []);
};

export default flatten;

const list = [];
console.log(flatten(list)) // []

const list2 = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(list2)) // [1, 2, 3, 5, 4, 3, 2]

const list3 = [[1, [5], [], [[-3, 'hi']]], 'string', 10, [[[5]]]];
console.log(flatten(list3)) // [1, 5, -3, 'hi', 'string', 10, 5]



// const flatten = list => list.reduce((acc, element) =>
//   (element instanceof Array ? [...acc, ...flatten(element)] : [...acc, element]), []);

