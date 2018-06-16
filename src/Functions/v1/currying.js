const True = (a,b) => a;
const False = (a,b) => b;
const If = (func) => (a) => (b) => func(a, b);


console.log(If(True)('one')('two'));
console.log(If(False)('one')('two'));
