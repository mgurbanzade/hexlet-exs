const extract = (list) => {
  list = map((el) => {
    el = eval('el.attributes.' + Object.keys(el.attributes)[0]);
    return el;
  }, list);

  return list;
};

export default extract;


// const mapping = {
//   img: t => getAttribute('src', t),
//   a: t => getAttribute('href', t),
//   link: t => getAttribute('href', t),

// };
// tags => map(tag => mapping[getName(tag)](tag), tags);
