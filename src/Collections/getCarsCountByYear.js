const getCarsCountByYear = (arr) => {
  const res = {};

  arr.map(car => res[car.year] = arr.filter(el => car.year === el.year).length);

  return res;
};

export default getCarsCountByYear;

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const cars2 = [
  { brand: 'bmw', model: 'm3', year: 2013 },
  { brand: 'opel', model: 'astra', year: 2014 },
  { brand: 'honda', model: 'accent', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2013 },
  { brand: 'kia', model: 'sportage', year: 2015 },
];

console.log(getCarsCountByYear(cars));
// const expected1 = {
//   2010: 1,
//   2012: 1,
//   2013: 1,
//   2014: 2,
// };


console.log(getCarsCountByYear(cars2));
// const expected2 = {
//   2013: 2,
//   2014: 2,
//   2015: 1,
// };


// export default (cars) => {
//   const iter = (items, acc) => {
//     if (items.length === 0) {
//       return acc;
//     }
//     const [{ year }, ...rest] = items;
//     const newValue = acc[year] ? acc[year] + 1 : 1;
//     return iter(rest, { ...acc, [year]: newValue });
//   };

//   return iter(cars, {});
// };
