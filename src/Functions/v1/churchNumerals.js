Zero = s => z => z;
succ = num => fn => x => fn(num(fn)(x))

const two = Succ(Succ(Zero));
console.log(two(x => x+1)(0))
