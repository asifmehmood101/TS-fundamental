//Any type
// we do not always have prior knowledge about the type of some variables,
//especially when there are user-entered values from third party libraries. In such cases,
//we need a provision that can deal with dynamic content.The Any type comes in handy here.

let somghting: any = 'hello world';
somghting = 23;
somghting = true;

console.log(somghting);
