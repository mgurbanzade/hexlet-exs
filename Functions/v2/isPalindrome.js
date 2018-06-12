const substr = (str, start, size) => str.substr(start, size);

const isPalindrome = (str) => {
  const firstLetter = substr(str, 0, 1);
  const lastLetter = substr(str, str.length - 1, 1);

  if (firstLetter != lastLetter) return false;
  if (str.length <= 2) return true;

  let nextString = substr(str, 1, str.length - 2);

  return isPalindrome(nextString);
};

console.log(isPalindrome('aibohphobia'))
console.log(isPalindrome('radar'))
