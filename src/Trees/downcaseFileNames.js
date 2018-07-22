import { cloneDeep } from 'lodash'; // eslint-disable-line
import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

const downcaseFileNames = (dir) => {
  return [dir].reduce((acc, el) => {
    if (el.type === 'directory') {
      return { ...el, children: el.children.map(downcaseFileNames) };
    }

    return { ...el, name: el.name.toLowerCase() };
  }, {});
};

export default downcaseFileNames;

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const original = cloneDeep(tree);

console.log(original);
console.log(downcaseFileNames(tree));

console.log(tree) // original

const tree2 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.JSON'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const actual = downcaseFileNames(tree2);

const expected = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NgiNx',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'config.json', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'eTc',
      type: 'directory',
    },
    { meta: {}, name: 'hosts', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

console.log(actual) // expected;


// const downcaseFileNames = (node) => {
//   if (node.type === 'directory') {
//     return { ...node, children: node.children.map(downcaseFileNames) };
//   }
//   return { ...node, name: node.name.toLowerCase() };
// };
