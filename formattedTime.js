const formattedTime = (min) => {
  let hours = Math.floor(min / 60);
  let minutes = min - 60 * hours;

  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }


  let result = `${addZero(hours)}:${addZero(minutes)}`;

  return result;
}

console.log(formattedTime(186));
