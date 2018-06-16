Zero = (s) => (z) => z;
Succ = (n) => (s => z => s (n (s) (z)));

const two = Succ(Succ(Zero));
console.log(two(x => x+1)(0))
