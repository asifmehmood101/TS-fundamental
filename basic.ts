//typeStrip uses "static types"(set during development)
function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string,
) {
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const nubmer2 = 6;
const showResult = false;
const resultPhrase = 'Result is :';

const result = add(number1, nubmer2, showResult, resultPhrase);

console.log(result);
