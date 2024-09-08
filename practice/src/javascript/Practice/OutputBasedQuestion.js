// 1a
var a = 5;
(function() {
	console.log(a);
  var a = 10;
})();
console.log(a);
 
console.log(1);
 
// 2
setTimeout(function () {
  console.log(2);
}, 0);
Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });


// 3
console.log(a);
console.log(b);
console.log(c);
let a = 10;
const b = 20;
var c = 30;  