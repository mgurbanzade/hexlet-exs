const partialApply = (fn, arg) => (a, b) => fn(a, arg);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);

console.log(f1(1));
console.log(f1(10));
