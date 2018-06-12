const substr = (str, start, size) => str.substr(start, size);

const isPalindrome = (str) => {
  str = str.toLowerCase();
  if (str.length <= 2) return true;
  if (str[0] !== str[str.length-1]) return false;

  return isPalindrome(substr(str, 1, (str.length-1) -1)) ? true : false;
};

console.log(isPalindrome('aibohphobia'))
