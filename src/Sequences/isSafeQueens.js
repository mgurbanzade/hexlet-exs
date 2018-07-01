import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

const isSafeQueens = (list) => {
  let elements = l();

  const getQueens = (list, i) => {
    elements = consList(cons(head(list), i), elements);
    let el = cons(head(list, i));
    return isEmpty(tail(list)) ? reverse(elements) : getQueens(tail(list), i + 1);
  };

  let queens = getQueens(list, 1);

  const check = (el1, el2) => {
    if (car(el1) === car(el2)) return false;
    if (cdr(el1) === cdr(el2)) return false;
    if (Math.abs(car(el1) - car(el2)) === 1 && Math.abs(cdr(el1) - cdr(el2)) === 1) return false;
    if (car(el1) - cdr(el1) === car(el2) - cdr(el2)) {
      if (car(el1) > car(el2)) return false;
    }
    return true;
  };

  let res = l();

  const iter = (list) => {
    let el1 = head(list);

    const iter2 = (list2) => {
      if (isEmpty(list2)) return res;
      let el2 = head(list2);
      res = consList(check(el1, el2), res);
      if (isEmpty(tail(list2))) return res;
      return iter2(tail(list2));
    };

    iter2(tail(list));

    return isEmpty(tail(list)) ? res : iter(tail(list));
  };

  const iter3 = (list) => isEmpty(tail(list)) ? head(list) : !head(list) ? head(list) : iter3(tail(list));

  return iter3(iter(queens));
};

export default isSafeQueens;




//      1   2   3   4   5   6   7   8
//     ___ ___ ___ ___ ___ ___ ___ ___
// 1  |___|___|_*_|___|___|___|___|___|
// 2  |_*_|___|___|___|___|___|___|___|
// 3  |___|___|___|___|___|___|___|___|
// 4  |___|_*_|___|_*_|___|___|___|___|
// 5  |___|___|___|___|___|___|___|___|
// 6  |___|___|___|___|___|___|___|___|
// 7  |___|___|___|___|___|___|___|___|
// 8  |___|___|___|___|___|___|___|___|

const queens1 = l(2, 4, 1, 3);
console.log(listToString(isSafeQueens(queens1))) // (true);

const queens2 = l(3, 6, 2, 5, 1, 4);
console.log(listToString(isSafeQueens(queens2))) // (true);

const queens3 = l(1, 5, 8, 6, 3, 7, 2, 4);
console.log(listToString(isSafeQueens(queens3))) // (true);

const queens4 = l(2, 1, 3);
console.log(listToString(isSafeQueens(queens4))) // (false);

const queens5 = l(1, 2, 3, 4, 5, 6);
console.log(listToString(isSafeQueens(queens5))) // (false);

const queens6 = l(1, 5, 8, 6, 3, 7, 2, 8);
console.log(listToString(isSafeQueens(queens6))) // (false);

const queens7 = l(3, 3, 3, 3, 3, 3);
console.log(listToString(isSafeQueens(queens7))) // (false);



// const makeQueen = (col, row) => cons(col, row);

// const isOnSameRow = (queen1, queen2) => cdr(queen1) === cdr(queen2);

// const isOnSameDiagonal = (queen1, queen2) => {
//   const row1 = cdr(queen1);
//   const row2 = cdr(queen2);
//   const col1 = car(queen1);
//   const col2 = car(queen2);
//   return Math.abs(row1 - row2) === Math.abs(col1 - col2);
// };

// const isSafeQueen = (queen, otherQueens) => {
//   const iter = (queens, col) => {
//     if (isEmpty(queens)) {
//       return true;
//     }

//     const row = head(queens);
//     const nextQueen = makeQueen(col, row);
//     const restQueens = tail(queens);
//     return (isOnSameRow(queen, nextQueen) || isOnSameDiagonal(queen, nextQueen)) ?
//       false : iter(restQueens, col + 1);
//   };

//   const startColumnPosition = car(queen) + 1;
//   return iter(otherQueens, startColumnPosition);
// };

// export default (queenPositions) => {
//   const iter = (positions, col) => {
//     if (isEmpty(positions)) {
//       return true;
//     }

//     const currentQueen = makeQueen(col, head(positions));
//     const restRows = tail(positions);
//     return isSafeQueen(currentQueen, restRows) ? iter(restRows, col + 1) : false;
//   };

//   const startColumnPosition = 1;
//   return iter(queenPositions, startColumnPosition);
// };
