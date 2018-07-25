const convert = (arr) => {
  if (arr.length === 0) return {};

  return arr.reverse().reduce((acc, el) => {
    acc[el[0]] = el[1];
    if (el[1] instanceof Array) acc[el[0]] = convert(el[1]);
    return acc;
  }, {})
};

export default convert;

const tree1 = [];
const result1 = convert(tree1);
console.log(result1) // {}

const tree2 = [['key', 'value']];
const result2 = convert(tree2);
console.log(result2) // { key: 'value' }

const tree3 = [['key2', 'value2'], ['key', 'value']];
const result3 = convert(tree3);
console.log(result3) // { key: 'value', key2: 'value2' }

const tree4 = [
  ['key2', 'value2'],
  ['anotherKey', [
    ['key2', false],
    ['innerKey', []],
  ]],
  ['key', null],
  ['anotherKey2', [
    ['wow', [['one', 'two'], ['three', 'four']]],
    ['key2', true],
  ]],
];

const result4 = convert(tree4);
console.log(result4)
// {
//   anotherKey: {
//     innerKey: {}, key2: false,
//   },
//   anotherKey2: {
//     key2: true,
//     wow: {
//       one: 'two',
//       three: 'four',
//     },
//   },
//   key: null,
//   key2: 'value2',
// }


// const convert = items => items.reduce((acc, [key, value]) =>
//   ({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});
// export default convert;
