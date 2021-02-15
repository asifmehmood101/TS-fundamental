//function type
//A function type has two parts: parameters and return type.
//When declaring a function type,
//you need to specify both parts with the following syntax:
//(parameter: type, parameter:type,...) => type

//for example
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printValue(number) {
  console.log(number);
}

//function and callbacks
function AddandHandle(n1: number, n2: number, cb: (num: number) => void) {
  let result = n1 + n2;
  cb(result);
}

//define function type
let combineValue: (a: number, b: number) => number;

combineValue = add;
console.log(combineValue(5, 10));

//callback function use
AddandHandle(20, 40, (result) => {
  console.log(result);
});
