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

  forEach(elem, i, arr){
    
  for (i=0; i < this.length; i++){
    elem = this[i];
    arr = Array.from(this);
    
    // console.log(`value: ${elem}`);
    // console.log(`index: ${i}`);
    // console.log(`array:`);
    // console.log(arr);

  };
}

  map(callback){
    let arr = Array.from(this);
    let newArr = [];
    for(const elem of arr){
      let newElem = callback(elem);
      newArr.push((newElem));    
    };
    return newArr;
  };

  push(...elems) {
    // добавить элементы в конец массива
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращает новую длину массива
    return this.length;
  };
}

const myArr = new MyArray();
myArr.push(11, 22, 33, 56, 67);
const newArr = myArr.map((elem)=>elem*2);