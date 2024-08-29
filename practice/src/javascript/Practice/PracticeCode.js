import React from "react";

function PracticeCode() {
  let deepArray = [
    [1, 2],
    [3, [4, [45 , [8]]]],
  ];

  function flatArray() {
    let flattenedArray = [];
    function flatten(arr) {
      arr.forEach((item) => {
        if (Array.isArray(item)) {
            flatten(item)
        }else{
            flattenedArray.push(item)
        }
      });
    }
    flatten(deepArray)
    return flattenedArray
  }
  console.log(flatArray() , 'chdck')


  function reverseString(str) {
    let reverseArray = str.split("")
    let resultString = []
    for(let i = reverseArray.length - 1; i >= 0; i--){
      resultString.push(reverseArray[i])
    }
    return resultString.join('')
  }
  
  console.log(reverseString('hello'), 'ssssssssss'); // Output: 'olleh'
}

export default PracticeCode