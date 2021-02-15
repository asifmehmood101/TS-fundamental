//TS object array santex

//we can use simple santext like normal object
//what is tuple is a fixed length array
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'asif mehmood',
  age: 28,
  hobbies: ['hello', '1'],
  role: [2, 'author'],
};

person.role.push('admin');
// person.role[1]=10
//it does not allow to add additional value if we use tuple means fixed length
// person.role = [0, 'hello', 'user'];

person.hobbies.map((items) => {
  console.log(items);
});
