import { mkdir, mkfile } from 'hexlet-immutable-fs-trees';
import reduce from './reduce.js';

const calculatefilesSize = tree => reduce((acc, el) => {
  if (el.type === 'directory') return acc;
  return acc + el.meta.size;
}, tree, 0);

const du = (tree) => {
  const result = tree.children.map(el => [el.name, calculatefilesSize(el)]);
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

export default du;

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

console.log(du(tree))
// [
//  ['etc', 10280],
//  ['hosts', 3500],
//  ['resolve', 1000],
// ]

console.log(du(tree.children[0]))
// [
//  ['consul', 9480],
//  ['nginx', 800],
//  ['apache', 0],
// ]

