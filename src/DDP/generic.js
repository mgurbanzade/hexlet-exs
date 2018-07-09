export const getMethod = (obj, methodName) => {
  const iter = (list) => {
    if (isEmpty(list)) return f;
    const tp = car(head(list));
    const name = car(cdr(head(list)));
    const f = cdr(cdr(head(list)));
    if (car(obj) === tp && name === methodName) return f;
    return iter(tail(list));
  };

  return iter(methods);
};
