class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }


  where(...elements) {
    const res = elements.map((el) => {
      if (typeof el === 'function') return coll => coll.filter(el);

    const keys = Object.keys(el);
    return coll => coll.filter(el2 =>
      keys.every(key => el[key] === el2[key]));
    });

    return this.build(res);
  }


  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
