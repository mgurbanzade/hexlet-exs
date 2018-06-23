const True = (arg1, arg2) => arg1;
const False = (arg1, arg2) => arg2;
const If = (fn) => arg1 => arg2 => fn(arg1, arg2);

console.log(If(True)('one')('two')) // one
console.log(If(False)('one')('two')) // two

export { If, True, False };
