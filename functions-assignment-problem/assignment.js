// Original
// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

// 1 - Re-write the function as an arrow function
const sayHello = (name) => console.log('Hi', name);
sayHello('Max');

//2 - Use 3 different syntaxes
// a) with two arguments (incl. a phrase that replaces "Hi")
let greeting = 'Hi';
let personName = 'Max';
const sayHello2 = (greet, person) => {
  console.log(greet + ' ' + person);
};
sayHello2(greeting, personName);

// b) with no arguments (hard-coded values in function body)
let sayHello3 = () => console.log('Hi Max');
sayHello3();

//c) with one returned value (instead of outputting text inside of the function directly).
let greeting1 = 'Hi';
let personName1 = 'Max';
const sayHello4 = (greet, person) => {
  console.log(greet, person);
  alert(greet + ' ' + person);
};
sayHello4(greeting1, personName1);
