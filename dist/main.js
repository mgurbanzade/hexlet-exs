/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hexlet-pairs-data/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/hexlet-pairs-data/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toString = exports.s = exports.random = exports.get = exports.length = exports.concat = exports.reduce = exports.map = exports.disj = exports.conj = exports.filter = exports.reverse = exports.has = exports.isEqual = exports.isEmpty = exports.tail = exports.head = exports.l = exports.cons = exports.checkList = exports.isList = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar _hexletPairs = __webpack_require__(/*! hexlet-pairs */ \"./node_modules/hexlet-pairs/dist/index.js\");\n\nvar pairs = _interopRequireWildcard(_hexletPairs);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./node_modules/hexlet-pairs-data/dist/utils.js\");\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj.default = obj;\n    return newObj;\n  }\n}\n/**\n * Check if argument is list\n * @example\n * isList(l()); // true\n * isList(l('a', 5)); // true\n * isList(false); // false\n * isList('hello'); // false\n */\n\n\nvar isList = exports.isList = function isList(mix) {\n  if (mix === null) {\n    return true;\n  }\n\n  if (pairs.isPair(mix)) {\n    return isList(pairs.cdr(mix));\n  }\n\n  return false;\n};\n\nvar checkList = exports.checkList = function checkList(list) {\n  if (!isList(list)) {\n    var _value = void 0;\n\n    if (pairs.isPair(list)) {\n      _value = 'pair: ' + pairs.toString(list);\n    } else if ((typeof list === 'undefined' ? 'undefined' : _typeof(list)) === 'object') {\n      _value = JSON.stringify(list, null, 2);\n    } else {\n      _value = String(list);\n    }\n\n    throw new Error('Argument must be list, but it was \\'' + _value + '\\'');\n  }\n};\n/**\n * Add element to list\n * @example\n * cons(5, l(1, 0)); // (5, 1, 0)\n */\n\n\nvar cons = exports.cons = function cons(element, list) {\n  checkList(list);\n  return pairs.cons(element, list);\n};\n/**\n * List constructor\n * @name l\n * @example\n * l(); // ()\n * l(8, 10); // (8, 10)\n */\n\n\nvar l = exports.l = function l() {\n  for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {\n    elements[_key] = arguments[_key];\n  }\n\n  return elements.reverse().reduce(function (acc, item) {\n    return cons(item, acc);\n  }, null);\n};\n/**\n * Get list's head\n * @example\n * head(l(10, 15, 20)); // 10\n */\n\n\nvar head = exports.head = function head(list) {\n  checkList(list);\n  return pairs.car(list);\n};\n/**\n * Get list's tail\n * @example\n * tail(l(10, 15, 20)); // (15, 20)\n */\n\n\nvar tail = exports.tail = function tail(list) {\n  checkList(list);\n  return pairs.cdr(list);\n};\n/**\n * Check if list is empty\n * @example\n * isEmpty(l()); // true\n * isEmpty(l(0)); // false\n * isEmpty(l('a', 5)); // false\n */\n\n\nvar isEmpty = exports.isEmpty = function isEmpty(list) {\n  checkList(list);\n  return list === null;\n};\n/**\n * Compare 2 lists\n * @example\n * isEqual(l(), l()); // true\n * isEqual(l(), l(8, 3)); // false\n * isEqual(l(1, 2, 10), l(1, 2, 10)); // true\n */\n\n\nvar isEqual = exports.isEqual = function isEqual(list1, list2) {\n  checkList(list1);\n  checkList(list2);\n\n  if (isEmpty(list1) && isEmpty(list2)) {\n    return true;\n  }\n\n  if (head(list1) !== head(list2)) {\n    return false;\n  }\n\n  return isEqual(tail(list1), tail(list2));\n};\n/**\n * Check if list has some element\n * @example\n * const numbers = l(3, 4, 5, 8);\n * has(numbers, 3); // true\n * has(numbers, 8); // true\n * has(numbers, 0); // false\n * has(numbers, 'wow'); // false\n */\n\n\nvar has = exports.has = function has(list, element) {\n  checkList(list);\n\n  if (isEmpty(list)) {\n    return false;\n  }\n\n  if (head(list) === element) {\n    return true;\n  }\n\n  return has(tail(list), element);\n};\n/**\n * Reverse list\n * @example\n * reverse(l()); // ()\n * reverse(l(8, 2, 10)); // (10, 2, 8)\n */\n\n\nvar reverse = exports.reverse = function reverse(list) {\n  checkList(list);\n\n  var iter = function iter(items, acc) {\n    return isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc));\n  };\n\n  return iter(list, l());\n};\n/**\n * Filter list\n * @example\n * const numbers = l(3, 4, 5, 8);\n * filter(n => n % 2 === 0, numbers); // (4, 8)\n */\n\n\nvar filter = exports.filter = function filter(func, list) {\n  checkList(list);\n\n  var iter = function iter(items, acc) {\n    if (isEmpty(items)) {\n      return reverse(acc);\n    }\n\n    var item = head(items);\n    var newAcc = func(item) ? cons(item, acc) : acc;\n    return iter(tail(items), newAcc);\n  };\n\n  return iter(list, l());\n};\n/**\n * Conj\n */\n\n\nvar conj = exports.conj = function conj(set, element) {\n  return has(set, element) ? set : cons(element, set);\n};\n/**\n * Disj\n */\n\n\nvar disj = exports.disj = function disj(set, element) {\n  return filter(function (e) {\n    return e !== element;\n  }, set);\n};\n/**\n * Map list\n * @example\n * const numbers = l(3, 4, 5, 8);\n * map(n => n + 2, numbers); // (5, 6, 7, 10)\n */\n\n\nvar map = exports.map = function map(func, list) {\n  checkList(list);\n\n  var iter = function iter(items, acc) {\n    if (isEmpty(items)) {\n      return reverse(acc);\n    }\n\n    return iter(tail(items), cons(func(head(items)), acc));\n  };\n\n  return iter(list, l());\n};\n/**\n * Reduce list\n * @example\n * const numbers = l(3, 4, 5, 8);\n * reduce((n, acc) => acc + 1, 0, numbers); // 4\n */\n\n\nvar reduce = exports.reduce = function reduce(func, acc, list) {\n  checkList(list);\n\n  var iter = function iter(items, result) {\n    return isEmpty(items) ? result : iter(tail(items), func(head(items), result));\n  };\n\n  return iter(list, acc);\n};\n/**\n * Join 2 lists\n * @example\n * const numbers = l(3, 4, 5, 8);\n * const numbers2 = l(3, 2, 9);\n * concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)\n * concat(l(), l(1, 10)); (1, 10)\n * concat(l(1, 10), l()); // (1, 10)\n */\n\n\nvar concat = exports.concat = function concat(list1, list2) {\n  checkList(list1);\n  checkList(list2);\n\n  if (isEmpty(list1)) {\n    return list2;\n  }\n\n  return cons(head(list1), concat(tail(list1), list2));\n};\n/**\n * List's length\n * @example\n * const numbers = l(3, 4, 5, 8);\n * data.length(numbers); // 4\n */\n\n\nvar length = exports.length = function length(seq) {\n  checkList(seq);\n  return reduce(function (n, acc) {\n    return acc + 1;\n  }, 0, seq);\n};\n/**\n * Get element from list by index\n * @example\n * const numbers = l(3, 4, 5, 8);\n * get(0, numbers); // 3\n * get(1, numbers); // 4\n * get(3, numbers); // 8\n */\n\n\nvar get = exports.get = function get(i, seq) {\n  checkList(seq);\n\n  if (i === 0) {\n    return head(seq);\n  }\n\n  return get(i - 1, tail(seq));\n};\n/**\n * Get random element from list\n */\n\n\nvar random = exports.random = function random(seq) {\n  checkList(seq);\n  var n = (0, _utils.getRandomIntInclusive)(0, length(seq) - 1);\n  return get(n, seq);\n};\n/**\n * Constructor for Set\n */\n\n\nvar s = exports.s = function s() {\n  for (var _len2 = arguments.length, elements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    elements[_key2] = arguments[_key2];\n  }\n\n  return elements.reverse().reduce(function (acc, item) {\n    return has(acc, item) ? acc : conj(acc, item);\n  }, l());\n};\n/**\n * Convert list to string\n * @example\n * toString(l()); // ()\n * toString(l('hello', 'world')); // ('hello', 'world')\n */\n\n\nvar toString = exports.toString = function toString(list) {\n  if (!isList(list)) {\n    if (pairs.isPair(list)) {\n      return 'pair: ' + pairs.toString(list);\n    } else if ((typeof list === 'undefined' ? 'undefined' : _typeof(list)) === 'object') {\n      return JSON.stringify(list, null, 2);\n    }\n\n    return list;\n  }\n\n  if (isEmpty(list)) {\n    return '()';\n  }\n\n  var rec = function rec(p) {\n    var first = head(p);\n    var rest = tail(p);\n\n    if (isEmpty(rest)) {\n      return toString(first);\n    }\n\n    return toString(first) + ', ' + rec(rest);\n  };\n\n  return '(' + rec(list) + ')';\n};\n\n//# sourceURL=webpack:///./node_modules/hexlet-pairs-data/dist/index.js?");

/***/ }),

/***/ "./node_modules/hexlet-pairs-data/dist/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/hexlet-pairs-data/dist/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar identity = exports.identity = function identity(value) {\n  return value;\n};\n\nvar getRandomIntInclusive = exports.getRandomIntInclusive = function getRandomIntInclusive(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\n//# sourceURL=webpack:///./node_modules/hexlet-pairs-data/dist/utils.js?");

/***/ }),

/***/ "./node_modules/hexlet-pairs/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/hexlet-pairs/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toString = exports.cdr = exports.car = exports.cons = exports.checkPair = exports.isPair = void 0;\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n/**\n * Check if something is pair\n * @example\n * const pair = cons(5, 'hello');\n * isPair(pair); // true\n * isPair(5); // false\n */\n\n\nvar isPair = function isPair(pair) {\n  return typeof pair === 'function' && pair.pair;\n};\n\nexports.isPair = isPair;\n\nvar checkPair = function checkPair(pair) {\n  if (!isPair(pair)) {\n    var value = _typeof(pair) === 'object' ? JSON.stringify(pair, null, 2) : String(pair);\n    throw new Error(\"Argument must be pair, but it was '\".concat(value, \"'\"));\n  }\n};\n/**\n * Build pair\n * @example\n * const pair = cons(5, 'hello');\n * @example\n * const pair = cons(cons(1, null), 'world');\n */\n\n\nexports.checkPair = checkPair;\n\nvar cons = function cons(a, b) {\n  var pair = function pair(message) {\n    switch (message) {\n      case 'car':\n        return a;\n\n      case 'cdr':\n        return b;\n\n      default:\n        throw new Error(\"Unknown message '\".concat(message, \"'\"));\n    }\n  };\n\n  pair.pair = true;\n  return pair;\n};\n/**\n * Get car (first element) from pair\n * @example\n * const pair = cons(5, 'hello');\n * car(pair); // 5\n */\n\n\nexports.cons = cons;\n\nvar car = function car(pair) {\n  checkPair(pair);\n  return pair('car');\n};\n/**\n * Get cdr (second element) from pair\n * @example\n * const pair = cons(5, 'hello');\n * cdr(pair); // hello\n */\n\n\nexports.car = car;\n\nvar cdr = function cdr(pair) {\n  checkPair(pair);\n  return pair('cdr');\n};\n/**\n * Convert pair to string (recursively)\n * @example\n * toString(cons('', 10)); // ('', 10)\n */\n\n\nexports.cdr = cdr;\n\nvar toString = function toString(pair) {\n  checkPair(pair);\n\n  var rec = function rec(p) {\n    if (!isPair(p)) {\n      return String(p);\n    }\n\n    var left = car(p);\n    var right = cdr(p);\n    return \"(\".concat(rec(left), \", \").concat(rec(right), \")\");\n  };\n\n  return rec(pair);\n};\n\nexports.toString = toString;\n\n//# sourceURL=webpack:///./node_modules/hexlet-pairs/dist/index.js?");

/***/ }),

/***/ "./src/Sequences/list.js":
/*!*******************************!*\
  !*** ./src/Sequences/list.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.concat = exports.reverse = exports.has = void 0;\n\nvar _hexletPairsData = __webpack_require__(/*! hexlet-pairs-data */ \"./node_modules/hexlet-pairs-data/dist/index.js\");\n\n// BEGIN (write your solution here)\nvar has = function has(list, el) {\n  return (0, _hexletPairsData.head)(list) === el ? true : (0, _hexletPairsData.tail)(list) === null ? false : has((0, _hexletPairsData.tail)(list), el);\n};\n\nexports.has = has;\n\nvar reverse = function reverse(list) {\n  var count = list.length;\n  var result;\n\n  var iter = function iter() {};\n};\n\nexports.reverse = reverse;\n\nvar concat = function concat(l1, l2) {}; // END\n\n\nexports.concat = concat;\n\n//# sourceURL=webpack:///./src/Sequences/list.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _list = __webpack_require__(/*! ./Sequences/list.js */ \"./src/Sequences/list.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });