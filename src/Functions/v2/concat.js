const concat = a => b => c => `${a}${b}${c}`;

export default concat;
console.log(concat('a')('bc')('f')); // => abcf
