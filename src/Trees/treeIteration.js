const treeIteration = (tree) => {
  const [name, children] = tree;
  console.log(name);
  if (!children) return;
  return children.map(treeIteration);
};


const tree = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];


treeIteration(tree);
