import path from 'path';
import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; //  eslint-disable-line

const findFilesByName = (tree, substr) => {
  const iter = (el, p, acc) => {
    const parents = path.join(p, el.name);

    if (el.type === 'file') {
      return el.name.includes(substr) ? [...acc, parents] : acc;
    }

    return el.children.reduce((acc2, el2) => iter(el2, parents, acc2), acc);
  }

  return iter(tree, '', []);
};

export default findFilesByName;

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);


console.log(findFilesByName(tree, 'co')) // [
//  '/etc/nginx/nginx.conf',
//  '/etc/consul/config.json',
// ]

// console.log(findFilesByName(tree, 'toohard')) // []
// console.log(findFilesByName(tree, 'data')) // [
  // '/etc/consul/data',
// ]
