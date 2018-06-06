const compose = (fn1, fn2) => (arg) => fn1(fn2(arg));

const f = compose(Math.sqrt, Math.abs);

console.log(f(-4));
