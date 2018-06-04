const isPowerOfThree = (num) => {
  let res;

  for(let i = 0; i < num; i++) {
    if (3 ** i === num) return true;
  }

  return false;
};

console.log(isPowerOfThree(9))
