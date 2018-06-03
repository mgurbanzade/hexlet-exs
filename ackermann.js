const ackermann = (m, n) => {
  let result;

  if (m < 0 || n < 0) return undefined;

  m === 0 ? result = n + 1 :
  m === 1 ? result = n + 2 :
  m === 2 ? result = 2 * n + 3 : 2 ** (n + 3) - 3;

  return result;
}

console.log(ackermann(2, 1));

