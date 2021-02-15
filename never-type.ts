/*
Never return type

which indicates the values that will never occur.
The never type is used when you are sure that something is never going to occur. 
For example, you write a function which will not return to its end point or always throws an exception.

*/

//for example
//error functions
function throwError(errorMsg: string, code: number): never {
  throw { msg: errorMsg, code: code };
}

throwError('not working ', 500);
//infinte loop
function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.');
  }
}
