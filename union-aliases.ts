//TypeStcrip-UNION TYPE

//TypeScript allows us to use more than one data type for a variable or a function parameter.
//This is called union type.

//type aliases
type combineable = number | string;

function combine(input1: combineable, input2: combineable) {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return (result = input1 + input2);
  } else {
    return (result = input1.toString() + input2.toString());
  }
}

const CombineAges = combine(30, 40);

console.log(CombineAges);

const combineNames = combine('Asif', 'Mehmood');
console.log(combineNames);
