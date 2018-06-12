const substr = (str, start, len) => str.substr(start, len);

const isHappyTicket = (ticketNum) => {
  const num = String(ticketNum);
  const leftSide = substr(num, 0, 3);
  const rightSide = substr(num, 3, 3);

  const iterateOver = (str) => {
    let res = 0;

    for (let i = 0; i < str.length; i += 1) {
      res += parseInt(str[i]);
    }

    return res;
  }

  return iterateOver(leftSide) === iterateOver(rightSide) ? true : false;
}

console.log(isHappyTicket(128722));
