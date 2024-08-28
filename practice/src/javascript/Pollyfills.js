import React from "react";

function PollyFills() {


  // Map Pollyfill

  let array = [1, 2, 3, 4];
  // array.map((item , index , array) => item)

  Array.prototype.mapPolly = function (callback) {
    let result = [];
    console.log(callback , result , 'check')
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, array));
    }
    return result;
  };

  console.log(array.mapPolly((item, index) => item + index));




//  Filter Pollyfill

  let array2 = [1, 2, 3, 4]
//   array2.filter(item => item > 2)

  Array.prototype.filterPolly = function(callback){
    let filteredArray = []
    for(let i =0; i < this.length; i++){
        if(callback(this[i])){
            filteredArray.push(this[i])
        }
    }
    return filteredArray
  }
  
console.log(array2.filterPolly(item => item !== 2))



// Reduce PollyFill
let array3 = [1,2,3,4,56,789,0,10]

// let b = array3.reducePolly((acc, curr) => acc + curr, 0)

Array.prototype.reducePolly = function(callback , initialVal){
    let acc = initialVal;
    for(let i=0; i < this.length; i++){
        if(acc !== undefined){
            acc = callback(acc , this[i], i, this)
        }
        else{
            acc = this[i]
        }
    }
    return acc
}

let newArray = [
    {name : 'komal', age: 20},
    {name : 'komal2', age: 22},
    {name : 'komal23', age: 23},
    {name : 'komal3', age: 205},
]
let b = newArray.reducePolly((acc , curr) => acc.age > curr.age ? acc : curr, {})
console.log(b, 'c')



}
export default PollyFills
