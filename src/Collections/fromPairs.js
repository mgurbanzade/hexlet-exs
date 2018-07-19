const fromPairs = (arr) => {
  const res = {};
  arr.map((el) => res[el[0]] = el[1]);
  return res;
};

export default fromPairs;

const result1 = fromPairs([['fred', 30], ['barney', 40]]);
console.log(result1) // { fred: 30, barney: 40 }

const result2 = fromPairs([['cat', 5], ['dog', 6], ['bird', 10]]);
console.log(result2) // { cat: 5, dog: 6, bird: 10 }



// export default pairs =>
//   pairs.reduce((acc, [key, value]) => ({ [key]: value, ...acc }), {});
