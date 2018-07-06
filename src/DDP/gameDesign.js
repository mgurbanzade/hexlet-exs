import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { get, length, cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    let loserHealth = health2;
    let winnerHealth = health1;
    let winner = name1;
    if (loserHealth <= 0)  {
      log = consList(cons(cons(winnerHealth, loserHealth), `${winner} победил, игра завершена!`), log);
      return log;
    }

    let randomCard = random(cards);
    let cardName = car(randomCard);
    let damage = cdr(randomCard);
    let attacker = order === 1 ? name1 : name2;
    let defender = order === 1 ? name2 : name1;
    let attackerHealth = order === 1 ? health1 : health2;
    let defenderHealth = order === 1 ? health2 : health1;
    defenderHealth -= damage();
    let message = `Игрок '${attacker}' применил '${cardName}' против '${defender}' и нанес урон '${damage()}'`;
    log = consList(cons(cons(attackerHealth, defenderHealth), message), log);
    order = order === 1 ? 2 : 1;
    return iter(attackerHealth, attacker, defenderHealth, defender, order, log);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

const make = () =>
  (name1, name2) =>
    run(name1, name2, cards);

let cards = l(cons('Костяная кочерга гробницы', () => 6));
let game = make(cards);
let log = game('John', 'Ada');

console.log(length(log)) // 5

const step1 = get(0, log);
console.log(pairToString(car(step1))) // '(10, 10)'

const step2 = get(1, log);
console.log(pairToString(car(step2))) // '(10, 4)'

const step3 = get(2, log);
console.log(pairToString(car(step3))) // '(4, 4)'

const step4 = get(3, log);
console.log(pairToString(car(step4))) // '(4, -2)'

const step5 = get(4, log);
console.log(pairToString(car(step5))) // '(4, -2)'

cards = l(cons('Разъяряющая осада отчаяния', () => 5));
game = make(cards);
log = game('Mike', 'Alan');

console.log(length(log)) // 5

const step6 = get(0, log);
console.log(pairToString(car(step1))) // '(10, 10)'

const step7 = get(1, log);
console.log(pairToString(car(step2))) // '(10, 5)'

const step8 = get(2, log);
console.log(pairToString(car(step3))) // '(5, 5)'

const step9 = get(3, log);
console.log(pairToString(car(step4))) // '(5, 0)'

const step10 = get(4, log);
console.log(pairToString(car(step5))) // '(5, 0)'

// if (health1 <= 0) {
//   return consList(cons(car(head(log)), `${name1} был убит`), log);
// }
// const card = random(cards);
// const cardName = car(card);
// const damage = cdr(card)();
// const newHealth = health2 - damage;

// const message = `Игрок '${name1}' применил '${cardName}'
//   против '${name2}' и нанес урон '${damage}'`;
// let stats;
// if (order === 1) {
//   stats = cons(cons(health1, newHealth), message);
// } else if (order === 2) {
//   stats = cons(cons(newHealth, health1), message);
// }
// const newLog = consList(stats, log);
// return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
