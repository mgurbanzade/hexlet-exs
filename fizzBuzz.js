const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    i % 5 === 0 && i % 3 === 0 ? console.log('FizzBuzz') :
    i % 3 === 0 ? console.log('Fizz') :
    i % 5 === 0 ? console.log('Buzz') :
    console.log(i);
  }
};

fizzBuzz(10, 20);
