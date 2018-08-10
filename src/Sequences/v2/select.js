import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
import { make, append, node, is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

const select = (tagName, html) => {
  return reduce((el, acc) => {
    if (is(tagName, el)) acc = concat(acc, l(el));
    if (hasChildren(el)) acc = concat(acc, select(tagName, children(el)));
    return acc;
  }, l(), html);
};

export default select;

const dom1 = make();
const children1 = l(node('a', l(node('span', 'scheme'))));
const dom2 = append(dom1, node('h1', children1));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children2));
const children3 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children3));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children4 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children4));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

console.log(listToString(select('p', dom)))




// Подсказки
// hasChildren - функция, которая проверяет, есть ли потомки у элемента
// children - функция, которая возвращает список потомков
// Проанализируйте тесты
// Для отладочной печати можете самостоятельно импортировать функцию toString из библиотеки hexlet-html-tags. Эта функция возвращает строковое представление html-списка.
// Эту задачу можно решить разными способами, алгоритм самого простого выглядит так:

// Проходимся по списку нод редьюсом, который собирает результирующий список.
// Если текущая нода содержит детей, то запускаем select рекурсивно для детей, а результат вызова добавляем в аккумулятор.
// Если текущая нода соответствует тому что мы ищем, добавляем ее в аккумулятор.
