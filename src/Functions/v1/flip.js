const sub = (a, b) => `${a}${b}`;

const flip = func => (a,b) => func(b, a);
const reverseSub = flip(sub);

console.log(sub('a', 'b'));
console.log(reverseSub('a', 'b'))
