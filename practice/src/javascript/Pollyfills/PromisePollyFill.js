import React from "react";

const PromisePollyFill = () => {
  const p1 = Promise.resolve(3);
  const p2 = 1337;
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });

  function PromiseAllPolly(array) {
    return new Promise((resolve, reject) => {
        let result = []
        
        array.forEach((promise, index) => {
            const isPromise = Promise.resolve(promise);
            isPromise.then((value) => {
                result[index] = value
                if(result.length === array.length){
                    resolve(result)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    });
  }

    PromiseAllPolly([p1,p2,p3]).then(value => {
        console.log(value)
    })
  return <>PromisePollyFill</>;
};

export default PromisePollyFill;
