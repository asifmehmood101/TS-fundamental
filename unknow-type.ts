//unknown type

/*
unknown type which is the type-safe counterpart of the any type.

The main difference between unknown and any is that unknown is much less permissive than any type
we have to do some form of checking before performing most operations on values of type unknown, 
whereas we don't have to do any checks before performing operations on values of type any.

*/

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'asif';

if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName);
}
