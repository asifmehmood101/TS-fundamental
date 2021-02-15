//enum
//In simple words, enums allow us to declare a set of named constants
//i.e.a collection of related values that can be numeric or string values.

//enum also known as  custom type
//we can also assign our own values likes string number
//enum default value start with 0 number
enum Role {
  admin = 2,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'asif mehmood',
  age: 28,
  hobbies: ['hello', '1'],
  role: Role.READ_ONLY,
};

if (person.role === Role.READ_ONLY) {
  console.log('its read only');
}
