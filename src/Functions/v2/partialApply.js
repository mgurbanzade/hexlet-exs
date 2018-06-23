const partialApply = (fn, arg1) => arg2 => fn(arg2, arg1);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);

console.log(f1(1)); // 1
console.log(f1(10)); // 100

export default partialApply;
