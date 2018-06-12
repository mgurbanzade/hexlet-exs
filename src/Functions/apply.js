const apply = (times, func, arg) => {
  if (times === 0) return arg;
  if (times > 1) return apply(times-1, func, func(arg));
  return func(arg);
}

console.log(apply(2, Math.sqrt, 16))


// Short
// const apply = (count, fn, value) =>
//   (count === 0 ? value : apply(count - 1, fn, fn(value)));
