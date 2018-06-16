const apply = (times, fn, arg) => {
  if (times === 0) return arg;
  if (times <= 0) return fn(arg);
  return apply(times - 1, fn, fn(arg));
};

console.log(apply(0, Math.sqrt, 4))
console.log(apply(1, Math.sqrt, 4))
console.log(apply(2, Math.sqrt, 16))
console.log(apply(1, v => v ** 2, 3))
console.log(apply(5, v => v + 10, 3))
