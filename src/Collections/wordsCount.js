const wordsCount = (words, stopWords) => {
  words = words.map((el) => el.toLowerCase());
  stopWords = stopWords.map((el) => el.toLowerCase());
  words = words.filter((el) => !stopWords.includes(el));
  const newMap = new Map();

  words.map((el) => {
    let length = words.filter((el1) => el1 === el).length;
    newMap.set(el, length);
  }, 0);

  return newMap;
};

export default wordsCount;


const stopWords = ['and', 'or', 'a', 'the', ''];

const actual = wordsCount([], []);
console.log(actual) // new Map()

const data1 = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
const expected1 = [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]];
const actual1 = wordsCount(data1, stopWords);
console.log(actual1) // new Map(expected1)
console.log(new Map(expected1))

const data2 = ['aNd', 'maybe', 'MAYBE', 'whAt', 'WHerE', 'wHat', 'wha', 'hat', 'Or'];
const expected2 = [['maybe', 2], ['what', 2], ['where', 1], ['wha', 1], ['hat', 1]];
const actual2 = wordsCount(data2, stopWords);
console.log(actual2) // new Map(expected2)




// const wordsCount = (words, stopWords) =>
//   words.map(word => word.toLowerCase())
//     .filter(word => !stopWords.includes(word))
//     .reduce((acc, word) => {
//       if (!acc.has(word)) {
//         return acc.set(word, 1);
//       }
//       return acc.set(word, acc.get(word) + 1);
//     }, new Map());
