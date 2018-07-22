import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

const filter = (fn, node) => {
  if (!fn(node)) return null;
  return { children: node.children.map(c => filter(fn, c)).filter(v => v) };
};

export default filter;


const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

const actual = filter(n => n.type === 'directory', tree);

const expected = {
  children: [
    {
      children: [
        {
          children: [{
            children: [],
            meta: {},
            name: 'conf.d',
            type: 'directory',
          }],
          meta: {},
          name: 'nginx',
          type: 'directory',
        },
        {
          children: [],
          meta: {},
          name: 'consul',
          type: 'directory',
        },
      ],
      meta: {},
      name: 'etc',
      type: 'directory',
    },
  ],
  meta: {},
  name: '/',
  type: 'directory',
};

console.log(actual) // expected

// const filter = (f, node) => {
//   if (!f(node)) {
//     return null;
//   }

//   const children = node.children.map(n => filter(f, n)).filter(v => v);
//   return { ...node, children };
// };

