class MyArray {
  constructor() {
    this.length = 0;
  }

  unshift(...elems) {
    for (let i = (this.length - 1) + elems.length; i >= elems.length; --i) {
      this[i] = this[i - elems.length];
    }
    for (let i = 0; i < elems.length; i++) {
      this[i] = elems[i];
      this.length++;
    }
    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const deletedValue = this[0];
    for (let i = 1; i < this.length; ++i) {
      this[i-1] = this[i];
    }
    delete this[--this.length-1];
    return deletedValue;
  }

  push(...elems) {
    // добавить элементы в конец массива
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращает новую длину массива
    return this.length;
  }
}

const myArr = new MyArray();
myArr.push(10, 20, 30, 55, 66);
