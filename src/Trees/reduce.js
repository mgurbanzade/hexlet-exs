import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

const reduce = (fn, tree, acc) => {
  const { children } = tree;
  const newAcc = fn(acc, tree);

  if (tree.type === 'directory') {
    return children.reduce((iAcc, n) =>
      reduce(fn, n, iAcc), newAcc);
  }

  return newAcc;
};

export default reduce;

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const actual = reduce(acc => acc + 1, tree, 0);
console.log(actual) // 6

const actual2 = reduce((acc, n) => (n.type === 'file' ? acc + 1 : acc), tree, 0);
console.log(actual2) // 2

const actual3 = reduce((acc, n) => (n.type === 'directory' ? acc + 1 : acc), tree, 0);
console.log(actual3) // 4
