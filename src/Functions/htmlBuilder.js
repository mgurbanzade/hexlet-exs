const table = (...children) => `<table>${children.join('')}</table>`;
const tr = (...children) => `<tr>${children.join('')}</tr>`;
const td = (...children) => `<td>${children.join('')}</td>`;
const p = (...children) => `<p>${children.join('')}</p>`;

const htmlBuilder = () => {
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions'))
  );

  return result;
};

console.log(htmlBuilder())
