import { cloneDeep } from 'lodash';
import { mkdir, mkfile } from 'hexlet-immutable-fs-trees';

const map = (fn, node) => {
  const newNode = fn(node);

  if (node.type === 'directory') {
    return { ...newNode, children: node.children.map(c => map(fn, c)) };
  }

  return newNode;
};

export default map;

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

map(n => ({ ...n, name: n.name.toUpperCase() }), tree);

console.log(tree) // original

const tree2 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const actual = map(n => ({ ...n, name: n.name.toUpperCase() }), tree2);

const expected = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: 'NGINX',
          type: 'directory',
        },
        {
          children: [{ meta: {}, name: 'CONFIG.JSON', type: 'file' }],
          meta: {},
          name: 'CONSUL',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'ETC',
      type: 'directory',
    },
    { meta: {}, name: 'HOSTS', type: 'file' },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

console.log(actual) // expected
