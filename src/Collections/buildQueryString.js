const bqs = (query) => {
  const sorted = Object.keys(query)
    .sort().reduce((acc, key) => {
        acc[key] = query[key];
        return acc;
    }, {});

  const length = Object.entries(sorted).length;

  return Object.entries(sorted).reduce((acc, [key, value], counter) => {
    return counter + 1 === length ? acc += `${key}=${value}` : acc += `${key}=${value}&`;
  }, '', 0);
};

export default bqs;

const result1 = bqs({});
console.log(result1) // ''

const result2 = bqs({ page: 1 });
console.log(result2) // 'page=1'

const result3 = bqs({ per: 10, page: 1 });
console.log(result3) // 'page=1&per=10'

const result4 = bqs({
  a: 10,
  s: 'Wow',
  d: 3.2,
  z: '89',
});

console.log(result4) // 'a=10&d=3.2&s=Wow&z=89'

// export default (params) => {
//   const keys = Object.keys(params);
//   keys.sort();
//   return keys.map(k => `${k}=${params[k]}`).join('&');
// };
