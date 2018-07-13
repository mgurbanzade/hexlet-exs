class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, order = 'asc') {
    this.collection = this.collection.sort(fn);
    this.collection = this.collection.sort((a, b) => {
      if (typeof a === 'object') {
        a = fn(a);
        b =  fn(b);
      }

      if (order === 'asc') return a > b ? 1 : a === b ? 1 : -1;
    });
    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
