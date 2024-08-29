import React from "react";

function ArrayPollyFills() {
  // Map Pollyfill

  let array = [1, 2, 3, 4];
  // array.map((item , index , array) => item)
  Array.prototype.mapPolly = function (callback) {
    let result = [];
    console.log(callback, result, "check");
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, array));
    }
    return result;
  };

  console.log(array.mapPolly((item, index) => item + index));



  //  Filter Pollyfill

  let array2 = [1, 2, 3, 4];
  //   array2.filter(item => item > 2)

  Array.prototype.filterPolly = function (callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };

  console.log(array2.filterPolly((item) => item !== 2));



  // Reduce PollyFill

  Array.prototype.reducePolly = function (callback, initialVal) {
    let acc = initialVal;
    for (let i = 0; i < this.length; i++) {
      if (acc !== undefined) {
        acc = callback(acc, this[i], i, this);
      } else {
        acc = this[i];
      }
    }
    return acc;
  };

  let newArray = [
    { name: "komal", age: 20 },
    { name: "komal2", age: 22 },
    { name: "komal23", age: 23 },
    { name: "komal3", age: 205 },
  ];
  let b = newArray.reducePolly(
    (acc, curr) => (acc.age > curr.age ? acc : curr),
    {}
  );
  console.log(b, "c");



  // Flat PollyFill

  let array5 = [1,2,[7],[9,[9,[10,[8]]]]]

  Array.prototype.flatPolly =  function(depth){
    let flattenedDepth = (depth === undefined) ? 1 : Math.floor(depth)
    if(flattenedDepth < 1) return this.slice()
    return this.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? curr.flatPolly(depth - 1) : curr)
    }, [])
  }
  console.log(array5.flatPolly(Infinity) , 'flattened arr')
  
}

export default ArrayPollyFills;
